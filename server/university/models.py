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
    id = models.AutoField(primary_key=True, editable=False)

    school = models.CharField(max_length=100, choices=SCHOOL_NAME_CHOICES, default=SEDS)
    terms = models.CharField(max_length=100, null=False, blank=True)

    name = models.CharField(max_length=100, null=False, blank=True)
    code = models.CharField(max_length=10, null=False, blank=True)
    credits = models.IntegerField(default=6, null=True)


class Lecture(models.Model):
    id = models.AutoField(primary_key=True)

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    number = models.IntegerField(null=False)
    days = models.CharField(max_length=10, null=False, blank=True)
    start_time = models.CharField(max_length=10, null=True)
    end_time = models.CharField(max_length=10, null=True)
    instructors = models.ManyToManyField(Instructor)


class Recitation(models.Model):
    id = models.AutoField(primary_key=True)

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    number = models.IntegerField(null=False)
    days = models.CharField(max_length=10, null=False, blank=True)
    start_time = models.CharField(max_length=10, null=True)
    end_time = models.CharField(max_length=10, null=True)
    instructors = models.ManyToManyField(Instructor)


class Lab(models.Model):
    id = models.AutoField(primary_key=True)

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    number = models.IntegerField(null=False)
    days = models.CharField(max_length=10, null=False, blank=True)
    start_time = models.CharField(max_length=10, null=True)
    end_time = models.CharField(max_length=10, null=True)
    instructors = models.ManyToManyField(Instructor)


class Syllabus(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    file = models.FileField(upload_to='syllabuses/')

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
    users = models.ManyToManyField(get_user_model())


class Deadline(models.Model):
    name = models.CharField(max_length=100, null=False, blank=True)
    description = models.CharField(max_length=500, null=True)
    finish_time = models.CharField(max_length=20, null=True)
    is_active = models.BooleanField(default=True)

    student = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)


class FAQ(models.Model):
    question = models.CharField(max_length=256, null=False, blank=True)
    answer = models.CharField(max_length=256, null=False, blank=True)


class Question(models.Model):
    text = models.CharField(max_length=1000, null=False)


class Link(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=256)
