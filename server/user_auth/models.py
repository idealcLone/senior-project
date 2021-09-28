from django.contrib.auth.models import AbstractUser
from django.db import models

from .consts import Permissions


class User(AbstractUser):
    is_club_leader = models.BooleanField('is_club_leader', default=False)

    def __str__(self):
        return self.username


class UserPermissions(models.Model):
    PERMISSION_CHOICES = [
        (Permissions.ADMIN, Permissions.ADMIN),
        (Permissions.CLUB_LEADER, Permissions.CLUB_LEADER)
    ]

    user = models.ForeignKey(User, db_index=True, related_name='fsdfdsfsdfasd', on_delete=models.CASCADE)
    permission = models.CharField(max_length=100, choices=PERMISSION_CHOICES)

    def __str__(self):
        return self.permission

