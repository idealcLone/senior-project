from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.core.exceptions import ObjectDoesNotExist
from django.db import models


class Role(models.Model):
    ROLE_CHOICES = [
        ('ADMIN', 'ADMIN'),
        ('MANAGER', 'MANAGER'),
        ('CLUB_LEADER', 'CLUB_LEADER'),
        ('STUDENT', 'STUDENT')
    ]
    name = models.CharField(max_length=100, choices=ROLE_CHOICES, default='STUDENT')


class UserManager(BaseUserManager):

    def create_user(self, email, major, password):
        if email is None:
            raise TypeError('Email is required')

        user = self.model(email=self.normalize_email(email), major=major)
        user.set_password(password)
        user.save(using=self._db)
        try:
            user_role = Role.objects.get(name='USER')
        except ObjectDoesNotExist:
            user_role = Role.objects.create(name='USER')
        user.roles.add(user_role)
        user.save(using=self._db)

        return user

    def create_manager(self, email, password):
        if email is None:
            raise TypeError('Email is required')

        user = self.create_user(email, None, password)
        user.save(using=self._db)
        try:
            manager_role = Role.objects.get(name='MANAGER')
        except ObjectDoesNotExist:
            manager_role = Role.objects.get(name='MANAGER')
        user.roles.add(manager_role)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, None, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        try:
            admin_role = Role.objects.get(name='ADMIN')
        except ObjectDoesNotExist:
            admin_role = Role.objects.create(name='ADMIN')
        user.roles.add(admin_role)
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.CharField(max_length=100, null=False, blank=True, unique=True)

    major = models.CharField(max_length=100, null=True)

    roles = models.ManyToManyField(Role, related_name='roles')

    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email
