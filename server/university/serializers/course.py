from rest_framework import serializers

from ..models import Course, Instructor, Term


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
    days = serializers.SerializerMethodField()
    terms = serializers.SerializerMethodField()
    school = serializers.SerializerMethodField()
    
    class Meta:
        model = Course
        fields = '__all__'

    def get_instructors(self, course):
        instructors = []

        for instructor in course.instructors.all():
            instructors.append(instructor.name)

        return instructors

    def get_days(self, course):
        days = []

        for day in course.days.all():
            days.append(day.name)

        return days

    def get_terms(self, course):
        terms = []

        for term in course.terms.all():
            terms.append(term.name)

        return terms

    def get_school(self, course):
        return course.school.name
