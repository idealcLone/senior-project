from django.contrib.auth.models import User
from django.db import models


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    major = models.CharField(max_length=100, blank=True)

    class Meta:
        verbose_name = 'student'
        verbose_name_plural = 'students'
