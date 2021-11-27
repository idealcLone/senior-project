from rest_framework import serializers

from ..models import Deadline


class DeadlineListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = ['id', 'name', 'description', 'is_active', 'finish_time']


class DeadlineCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = ['name', 'description', 'is_active', 'finish_time', 'student']


class DeadlineDestroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = ['name', 'description', 'is_active', 'finish_time']


class DeadlineUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = ['name', 'description', 'is_active', 'finish_time']
