from django.contrib.auth import get_user_model
from django.db import models

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


class Instructor(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    school = models.CharField(max_length=100, choices=SCHOOL_NAME_CHOICES, default=SEDS)


class Course(models.Model):
    COURSE_DURATION_CHOICES = [
        (50, 50),
        (75, 75)
    ]

    id = models.AutoField(primary_key=True, editable=False)

    school = models.CharField(max_length=100, choices=SCHOOL_NAME_CHOICES, default=SEDS)
    instructors = models.ManyToManyField(Instructor)
    terms = models.CharField(max_length=100, null=False, blank=True)
    days = models.CharField(max_length=10, null=False, blank=True)

    duration = models.IntegerField(choices=COURSE_DURATION_CHOICES, default=50)
    name = models.CharField(max_length=100, null=False, blank=True)
    start_time = models.CharField(max_length=10, null=True)
    code = models.CharField(max_length=10, null=False, blank=True)


class Syllabus(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    file = models.FileField(upload_to='syllabuses')

    course = models.ForeignKey(Course, on_delete=models.CASCADE)


class Club(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    leader = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, null=True)


class Event(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    description = models.CharField(max_length=255, null=True)
    image = models.ImageField(upload_to='events/', null=True)
    start_time = models.CharField(max_length=10, null=True)
    start_date = models.CharField(max_length=15, null=True)
    location = models.CharField(max_length=100, null=True)
    registration_link = models.CharField(max_length=100, null=True)
    additional_info = models.CharField(max_length=255, null=True)

    club = models.ForeignKey(Club, on_delete=models.CASCADE)


class Deadline(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)

    start_time = models.TimeField(auto_now=True)
    finish_time = models.TimeField(auto_now=True)

    is_active = models.BooleanField(default=True)

    student = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)


class FAQ(models.Model):
    question = models.CharField(max_length=256, null=False, blank=True)
    answer = models.CharField(max_length=256, null=False, blank=True)
