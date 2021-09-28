from rest_framework import generics
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from ..models import Course
from ..serializers.course import CourseListSerializer, CourseCreateSerializer, CourseUpdateSerializer, \
    CourseRetrieveSerializer


class CourseListView(generics.ListAPIView):
    serializer_class = CourseListSerializer
    queryset = Course.objects.all()


class CourseCreateView(generics.CreateAPIView):
    serializer_class = CourseCreateSerializer
    queryset = Course.objects.all()
    permission_classes = (IsAdminUser,)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class CourseUpdateView(generics.UpdateAPIView):
    serializer_class = CourseUpdateSerializer
    queryset = Course.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().update(request, pk, **kwargs)


class CourseRetrieveView(generics.RetrieveAPIView):
    serializer_class = CourseRetrieveSerializer
    queryset = Course.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)
