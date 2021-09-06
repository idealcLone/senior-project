from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ObjectDoesNotExist

from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Student
from .serializers import StudentSerializer, MyTokenObtainPairSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class UserRetrieveView(generics.RetrieveAPIView):
    serializer_class = StudentSerializer

    def retrieve(self, request, *args, **kwargs):
        student = Student.objects.get(user=self.request.user)
        serializer = StudentSerializer(student)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_user(request):
    body = request.data

    try:
        user = User.objects.get(username=body['username'])
    except ObjectDoesNotExist:
        user = User.objects.create_user(username=body['username'], password=body['password'])
        student = Student.objects.create(major=body['major'], user=user)
        serializer = StudentSerializer(student)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response("User with this username already exists", status=status.HTTP_400_BAD_REQUEST)