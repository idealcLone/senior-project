from rest_framework import serializers

from ..models import Course, Instructor, Term


class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ('id', 'full_name')


class TermSerializer(serializers.ModelSerializer):
    class Meta:
        model = Term
        fields = ('id', 'name')


class CourseListSerializer(serializers.ModelSerializer):
    instructors = serializers.SerializerMethodField(read_only=True)
    terms = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Course
        fields = '__all__'

    def get_instructors(self, obj):
        instructors = obj.instructor_set.all()
        serializer = InstructorSerializer(instructors, many=True)
        return serializer.data

    def get_terms(self, obj):
        terms = obj.terms
        serializer = TermSerializer(terms)
        return serializer.data


class CourseCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class CourseRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'
