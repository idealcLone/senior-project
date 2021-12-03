import datetime

from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from university.models import Course, Instructor, Syllabus
from university.serializers.course import CourseListSerializer, CourseCreateSerializer, CourseUpdateSerializer, \
    CourseRetrieveSerializer


@api_view(['POST'])
@permission_classes([IsAdminUser])
def upload_syllabus(request):
    course = Course.objects.get(id=request.data['course'])
    Syllabus.objects.create(name='Syllabus', file=request.data['syllabus'], course=course)

    return Response(status.HTTP_200_OK)


class CourseListView(generics.ListAPIView):
    serializer_class = CourseRetrieveSerializer
    queryset = Course.objects.all()


class CourseCreateView(generics.CreateAPIView):
    serializer_class = CourseCreateSerializer
    queryset = Course.objects.all()
    permission_classes = (IsAdminUser,)

    def create(self, request, *args, **kwargs):
        data = request.data

        instructors = []
        for instructor in data['instructors']:
            try:
                instructors.append(Instructor.objects.get(name=instructor).id)
            except ObjectDoesNotExist:
                new_instructor = Instructor.objects.create(name=instructor, school=request.data['school'])
                instructors.append(new_instructor.id)

        request.data['instructors'] = instructors

        return super().create(request, *args, **kwargs)


class CourseUpdateView(generics.UpdateAPIView):
    serializer_class = CourseUpdateSerializer
    queryset = Course.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = request.data

        instructors = []
        for instructor in data['instructors']:
            try:
                instructors.append(Instructor.objects.get(name=instructor).id)
            except ObjectDoesNotExist:
                new_instructor = Instructor.objects.create(name=instructor, school=request.data['school'])
                instructors.append(new_instructor.id)

        request.data['instructors'] = instructors

        return super().update(request, pk, **kwargs)


class CourseRetrieveDestroyView(generics.RetrieveDestroyAPIView):
    serializer_class = CourseRetrieveSerializer
    queryset = Course.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)

    def destroy(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().destroy(request, pk, **kwargs)
