from django.db import models


class School(models.Model):
    SCHOOL_CHOICES = [
        ('SEDS', 'SEDS'),
        ('SMG', 'SMG'),
        ('SSH', 'SSH'),
        ('CPS', 'CPS')
    ]

    name = models.CharField(max_length=4, choices=SCHOOL_CHOICES, default='SEDS')


class Course(models.Model):
    code = models.CharField(max_length=10, null=False)
    name = models.CharField(max_length=100, null=False)
    start_time = models.TimeField(blank=True)
    end_time = models.TimeField(blank=True)
    days = models.CharField(max_length=3, null=False)
    syllabus = models.BooleanField(default=False)


    def __str__(self):
        return self.name


class Instructor(models.Model):
    courses = models.ManyToManyField(Course)

    full_name = models.CharField(max_length=100, null=False)