from rest_framework import serializers

from ..models import Course, Syllabus


class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabus
        fields = '__all__'


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
    syllabuses = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    def get_syllabuses(self, course):
        return SyllabusSerializer(course.syllabus_set.all(), many=True).data

    def get_instructors(self, course):
        instructors = []

        for instructor in course.instructors.all():
            instructors.append(instructor.name)

        return instructors
