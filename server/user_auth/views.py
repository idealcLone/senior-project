from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token

from rest_framework import status, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import UserPermissions
from .serializers import UserSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['POST'])
def create_user(request):
    body = request.data

    try:
        user = get_user_model().objects.get(username=body['username'])
    except ObjectDoesNotExist:
        user = get_user_model().objects.create_user(username=body['username'], password=body['password'])
        user.save()
        serializer = UserSerializer(user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response("User with this username already exists", status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
    body = request.data

    user = authenticate(request, username=body['username'], password=body['password'])

    if user is None:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    try:
        token = Token.objects.get(user=user)
    except ObjectDoesNotExist:
        token = Token.objects.create(user=user)

    serializer = UserSerializer(user)

    return Response({**serializer.data, 'token': token.key})
