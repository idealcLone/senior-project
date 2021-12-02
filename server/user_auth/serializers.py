from django.contrib.auth import get_user_model
from rest_framework import serializers

from university.serializers.event import EventSerializer


class UserSerializer(serializers.ModelSerializer):
    is_admin = serializers.SerializerMethodField(read_only=True)
    events = serializers.SerializerMethodField(read_only=True)

    def get_events(self, user):
        return EventSerializer(user.event_set.all(), many=True).data

    def get_is_admin(self, obj):
        return obj.is_staff

    class Meta:
        model = get_user_model()
        fields = ['id', 'email', 'is_admin', 'is_club_leader', 'major', 'events']
