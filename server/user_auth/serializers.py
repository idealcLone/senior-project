from django.contrib.auth import get_user_model
from rest_framework import serializers

from university.serializers.event import EventSerializer
from user_auth.models import Role


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['name']


class UserSerializer(serializers.ModelSerializer):
    events = serializers.SerializerMethodField()
    roles = serializers.SerializerMethodField()

    def get_events(self, user):
        return EventSerializer(user.event_set, many=True).data

    def get_roles(self, user):
        return RoleSerializer(user.roles, many=True).data

    class Meta:
        model = get_user_model()
        exclude = ['password']
