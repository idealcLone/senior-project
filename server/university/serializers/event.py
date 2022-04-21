from rest_framework import serializers

from university.models import Event


class EventSerializer(serializers.ModelSerializer):
    club = serializers.SerializerMethodField()

    def get_club(self, event):
        return event.club.name

    class Meta:
        model = Event
        fields = '__all__'


class EventCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        exclude = ['users']


class EventUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['name', 'description', 'club', 'start_time', 'start_date', 'location', 'additional_info', 'image']
