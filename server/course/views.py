from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Course
from .serializers import CourseListSerializer


@api_view(['GET'])
def all_courses(request):
    courses = Course.objects.all()

    serializer = CourseListSerializer(courses, many=True)

    return Response(serializer.data, status=status.HTTP_200_OK)
