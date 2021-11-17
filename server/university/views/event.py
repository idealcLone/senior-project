from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from university.serializers.event import EventSerializer, EventCreateSerializer, EventUpdateSerializer

from university.models import Event, Club


class EventListView(generics.ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


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


class EventRetrieveView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)
