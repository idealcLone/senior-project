import jwt

from datetime import datetime, timedelta

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from django.db import IntegrityError

from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer
from .utils import generate_tokens

from university.models import Event

User = get_user_model()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_event(request):
    user = request.user
    event = Event.objects.get(id=request.data['eventId'])
    user.event_set.add(event)
    user.save()
    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_profile(request):
    user = request.user
    user.email = request.data['email']
    user.major = request.data['major']
    user.save()
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
def create_user(request):
    body = request.data

    try:
        User.objects.create_user(email=body['email'], major=body['major'], password=body['password'])

        return Response(status=status.HTTP_201_CREATED)

    except IntegrityError as e:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    body = request.data

    try:
        user = User.objects.get(email=body['email'])

        if not user.check_password(body['password']):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        access_token, refresh_token = generate_tokens(user)

        return Response({
            'access_token': access_token,
            'refresh_token': refresh_token
        })
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def generate_new_tokens(request):
    token = request.query_params.get('token')

    try:
        payload = jwt.decode(token, settings.SECRET_KEY, 'HS256')

        try:
            user = User.objects.get(id=payload['id'])
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        access_token, refresh_token = generate_tokens(user)

        response = Response(refresh_token)
        response.set_cookie('TOKEN', access_token, expires=datetime.now() + timedelta(hours=1))

        return response

    except jwt.ExpiredSignature or jwt.DecodeError or jwt.InvalidTokenError:
        return Response(status=status.HTTP_400_BAD_REQUEST)
