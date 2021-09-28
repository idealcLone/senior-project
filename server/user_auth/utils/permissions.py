from django.contrib.auth import get_user_model

from ..models import UserPermissions
from ..consts import Permissions


def get_permissions(user):
    if not isinstance(user, get_user_model()):
        return UserPermissions.objects.none()
    return UserPermissions.objects.filter(user=user)


def check_permissions(user, permissions):
    if not isinstance(user, get_user_model()) or not isinstance(permissions, list) or len(permissions) == 0:
        return False

    user_permissions = set(UserPermissions.objects.filter(user=user).values_list('permission', flat=True))
    if Permissions.ADMIN in permissions:
        return True

    for user_permission in user_permissions:
        if user_permission in permissions:
            return True

    return False
