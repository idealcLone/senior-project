import datetime

from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status

from university.models import Course, Instructor, Syllabus, Lecture, Recitation, Lab
from university.serializers.course import CourseListSerializer, CourseCreateSerializer, CourseUpdateSerializer, \
    CourseRetrieveSerializer, InstructorSerializer


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

        lectures = data['lectures']
        recitations = data['recitations']
        labs = data['labs']

        course = Course.objects.create(school=data['school'], terms=data['terms'], name=data['name'], code=data['code'],
                                       credits=data['credits'])

        for lecture in lectures:
            new_lecture = Lecture.objects.create(course=course, number=lecture['number'], days=lecture['days'],
                                                 start_time=lecture['start_time'], end_time=lecture['end_time'])

            instructors = []
            for instructor in lecture['instructors']:
                try:
                    instructor_to_add = Instructor.objects.get(name=instructor)
                except ObjectDoesNotExist:
                    instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                instructors.append(instructor_to_add)

            new_lecture.instructors.set(instructors)

        for recitation in recitations:
            new_recitation = Recitation.objects.create(course=course, number=recitation['number'],
                                                       days=recitation['days'],
                                                       start_time=recitation['start_time'],
                                                       end_time=recitation['end_time'])

            instructors = []
            for instructor in recitation['instructors']:
                try:
                    instructor_to_add = Instructor.objects.get(name=instructor)
                except ObjectDoesNotExist:
                    instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                instructors.append(instructor_to_add)

            new_recitation.instructors.set(instructors)

        for lab in labs:
            new_lab = Lab.objects.create(course=course, number=lab['number'], days=lab['days'],
                                         start_time=lab['start_time'], end_time=lab['end_time'])

            instructors = []
            for instructor in lab['instructors']:
                try:
                    instructor_to_add = Instructor.objects.get(name=instructor)
                except ObjectDoesNotExist:
                    instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                instructors.append(instructor_to_add)

            new_lab.instructors.set(instructors)

        return Response(status=status.HTTP_201_CREATED)


class CourseUpdateView(generics.UpdateAPIView):
    serializer_class = CourseUpdateSerializer
    queryset = Course.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = request.data

        lectures = data['lectures']
        recitations = data['recitations']
        labs = data['labs']

        Course.objects.update(school=data['school'], terms=data['terms'], name=data['name'], code=data['code'],
                              credits=data['credits'])
        course = Course.objects.get(school=data['school'], terms=data['terms'], name=data['name'], code=data['code'],
                                    credits=data['credits'])

        for lecture in lectures:
            try:
                Lecture.objects.get(course=course, number=lecture['number'], days=lecture['days'],
                                    start_time=lecture['start_time'], end_time=lecture['end_time'])
            except ObjectDoesNotExist:
                new_lecture = Lecture.objects.create(course=course, number=lecture['number'], days=lecture['days'],
                                                     start_time=lecture['start_time'], end_time=lecture['end_time'])

                instructors = []
                for instructor in lecture['instructors']:
                    try:
                        instructor_to_add = Instructor.objects.get(name=instructor)
                    except ObjectDoesNotExist:
                        instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                    instructors.append(instructor_to_add)

                new_lecture.instructors.set(instructors)

        for recitation in recitations:
            try:
                Recitation.objects.get(course=course, number=recitation['number'],
                                       days=recitation['days'],
                                       start_time=recitation['start_time'],
                                       end_time=recitation['end_time'])
            except ObjectDoesNotExist:
                new_recitation = Recitation.objects.create(course=course, number=recitation['number'],
                                                           days=recitation['days'],
                                                           start_time=recitation['start_time'],
                                                           end_time=recitation['end_time'])

                instructors = []
                for instructor in recitation['instructors']:
                    try:
                        instructor_to_add = Instructor.objects.get(name=instructor)
                    except ObjectDoesNotExist:
                        instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                    instructors.append(instructor_to_add)

                new_recitation.instructors.set(instructors)

        for lab in labs:
            try:
                Lab.objects.get(course=course, number=lab['number'], days=lab['days'],
                                start_time=lab['start_time'], end_time=lab['end_time'])
            except ObjectDoesNotExist:
                new_lab = Lab.objects.create(course=course, number=lab['number'], days=lab['days'],
                                             start_time=lab['start_time'], end_time=lab['end_time'])

                instructors = []
                for instructor in lab['instructors']:
                    try:
                        instructor_to_add = Instructor.objects.get(name=instructor)
                    except ObjectDoesNotExist:
                        instructor_to_add = Instructor.objects.create(name=instructor, school=data['school'])
                    instructors.append(instructor_to_add)

                new_lab.instructors.set(instructors)

        return Response(status=status.HTTP_201_CREATED)


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


class InstructorListView(generics.ListAPIView):
    serializer_class = InstructorSerializer
    queryset = Instructor.objects.all()
