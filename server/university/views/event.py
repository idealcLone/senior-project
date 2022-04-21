import datetime

import pytz
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from university.serializers.event import EventSerializer, EventCreateSerializer, EventUpdateSerializer

from university.models import Event, Club


class EventListView(generics.ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def get_queryset(self):
        return self.queryset.order_by('start_date', 'start_time')


class EventCreateView(generics.CreateAPIView):
    serializer_class = EventCreateSerializer
    queryset = Event.objects.all()
    permission_classes = (IsAdminUser,)

    def create(self, request, *args, **kwargs):
        data = request.data

        try:
            club = Club.objects.get(name=data['club'])
        except ObjectDoesNotExist:
            club = Club.objects.create(name=data['club'])

        request.data._mutable = True

        request.data['club'] = club.id

        return super().create(request, *args, **kwargs)


class EventUpdateView(generics.UpdateAPIView):
    serializer_class = EventUpdateSerializer
    queryset = Event.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        data = request.data

        club = Club.objects.get(name=data['club'])

        request.data._mutable = True

        request.data['club'] = club.id

        return super().update(request, pk, **kwargs)


class EventRetrieveDestroyView(generics.RetrieveDestroyAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)

    def destroy(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().destroy(request, pk, **kwargs)


@api_view(['POST'])
@renderer_classes([JSONRenderer])
def add_user_to_event(request):
    user_id = request.data['userId']
    event_id = request.data['eventId']

    user = get_user_model().objects.get(id=user_id)
    event = Event.objects.get(id=event_id)
    event.users.add(user)
    event.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['DELETE'])
@renderer_classes([JSONRenderer])
def remove_user_from_event(request):
    user_id = request.query_params.get('userId')
    event_id = request.query_params.get('eventId')

    user = get_user_model().objects.get(id=user_id)
    event = Event.objects.get(id=event_id)
    event.users.remove(user)
    event.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def get_upcoming_event(request):
    user_id = request.query_params.get('userId')

    if user_id:
        user = get_user_model().objects.get(pk=user_id)
        events = user.event_set
    else:
        events = Event.objects.all()

    now = datetime.datetime.now(pytz.timezone('Asia/Almaty'))

    utc = pytz.UTC

    for event in events.order_by('start_date', 'start_time'):
        date = datetime.datetime.fromisoformat(event.start_date + ' ' + event.start_time)
        if now < utc.localize(date):
            return Response(EventSerializer(event).data)

    return Response(status=status.HTTP_404_NOT_FOUND)
