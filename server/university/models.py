from django.contrib.auth import get_user_model
from django.db import models


class Day(models.Model):
    MONDAY = 'M'
    TUESDAY = 'T'
    WEDNESDAY = 'W'
    THURSDAY = 'R'
    FRIDAY = 'F'
    DAY_NAME_CHOICES = [
        (MONDAY, 'MONDAY'),
        (TUESDAY, 'TUESDAY'),
        (WEDNESDAY, 'WEDNESDAY'),
        (THURSDAY, 'THURSDAY'),
        (FRIDAY, 'FRIDAY'),
    ]

    name = models.CharField(max_length=100, choices=DAY_NAME_CHOICES, default=MONDAY)


class School(models.Model):
    SEDS = 'SEDS'
    SMG = 'SMG'
    SSH = 'SSH'
    NUSOM = 'NUSOM'
    CPS = 'CPS'
    SCHOOL_NAME_CHOICES = [
        (SEDS, SEDS),
        (SMG, SMG),
        (SSH, SSH),
        (NUSOM, NUSOM),
        (CPS, CPS),
    ]

    name = models.CharField(max_length=100, choices=SCHOOL_NAME_CHOICES, default=SEDS)


class Term(models.Model):
    SPRING = 'SPRING'
    SUMMER = 'SUMMER'
    FALL = 'FALL'
    TERM_NAME_CHOICES = [
        (SPRING, SPRING),
        (SUMMER, SUMMER),
        (FALL, FALL),
    ]

    name = models.CharField(max_length=100, choices=TERM_NAME_CHOICES, default=FALL)


class Instructor(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    school = models.ForeignKey(School, on_delete=models.CASCADE)


class Course(models.Model):
    COURSE_DURATION_CHOICES = [
        (50, 50),
        (75, 75)
    ]

    id = models.AutoField(primary_key=True, editable=False)

    school = models.ForeignKey(School, on_delete=models.CASCADE)
    instructor = models.ManyToManyField(Instructor)
    terms = models.ManyToManyField(Term)
    days = models.ManyToManyField(Day)

    duration = models.IntegerField(choices=COURSE_DURATION_CHOICES, default=50)
    name = models.CharField(max_length=100, null=False, blank=True)
    start_time = models.TimeField(auto_now=True)
    code = models.CharField(max_length=5, null=False, blank=True)


class Syllabus(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    file = models.FileField(upload_to='syllabuses')

    course = models.ForeignKey(Course, on_delete=models.CASCADE)


class Club(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    leader = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, null=True)


class Organizer(models.Model):
    name = models.CharField(max_length=100, null=True)

    club = models.OneToOneField(Club, on_delete=models.CASCADE, null=True)


class Event(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)

    organizer = models.OneToOneField(Organizer, on_delete=models.CASCADE)


class Deadline(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)

    start_time = models.TimeField(auto_now=True)
    finish_time = models.TimeField(auto_now=True)

    is_active = models.BooleanField(default=True)

    student = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)


class FAQ(models.Model):
    question = models.CharField(max_length=256, null=False, blank=True)
    answer = models.CharField(max_length=256, null=False, blank=True)
