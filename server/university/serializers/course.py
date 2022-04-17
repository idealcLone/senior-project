from rest_framework import serializers

from ..models import Course, Syllabus, Lecture, Recitation, Lab, Instructor


class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Syllabus
        fields = '__all__'


class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ['name']


class LectureSerializer(serializers.ModelSerializer):
    instructors = serializers.SerializerMethodField()

    def get_instructors(self, lecture):
        return lecture.instructors.values_list('name', flat=True)

    class Meta:
        model = Lecture
        fields = '__all__'


class RecitationSerializer(serializers.ModelSerializer):
    instructors = serializers.SerializerMethodField()

    def get_instructors(self, recitation):
        return recitation.instructors.values_list('name', flat=True)

    class Meta:
        model = Recitation
        fields = '__all__'


class LabSerializer(serializers.ModelSerializer):
    instructors = serializers.SerializerMethodField()

    def get_instructors(self, lab):
        return lab.instructors.values_list('name', flat=True)

    class Meta:
        model = Lab
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
    lectures = serializers.SerializerMethodField()
    recitations = serializers.SerializerMethodField()
    labs = serializers.SerializerMethodField()

    def get_lectures(self, course):
        return LectureSerializer(course.lecture_set, many=True).data

    def get_recitations(self, course):
        return RecitationSerializer(course.recitation_set, many=True).data

    def get_labs(self, course):
        return LabSerializer(course.lab_set, many=True).data

    class Meta:
        model = Course
        fields = '__all__'
