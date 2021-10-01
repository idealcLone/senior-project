from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.db import models

from .consts import Permissions


class User(AbstractUser):
    is_club_leader = models.BooleanField('is_club_leader', default=False)

    def __str__(self):
        return self.username

    pass


class UserPermissions(models.Model):
    PERMISSION_CHOICES = [
        (Permissions.ADMIN, Permissions.ADMIN),
        (Permissions.CLUB_LEADER, Permissions.CLUB_LEADER)
    ]

    user = models.ForeignKey(get_user_model(), db_index=True, related_name='permissions', on_delete=models.CASCADE)
    permission = models.CharField(max_length=100, choices=PERMISSION_CHOICES)

    def __str__(self):
        return self.permission

