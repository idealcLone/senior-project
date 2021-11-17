from rest_framework import serializers

from ..models import Course


class CourseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseRetrieveSerializer(serializers.ModelSerializer):
    instructors = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_instructors(self, course):
        instructors = []

        for instructor in course.instructors.all():
            instructors.append(instructor.name)

        return instructors
