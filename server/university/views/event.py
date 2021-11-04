from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from university.serializers.event import EventSerializer

from university.models import Event


class EventListView(generics.ListAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()


class EventCreateView(generics.CreateAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    permission_classes = (IsAdminUser,)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class EventUpdateView(generics.UpdateAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().update(request, pk, **kwargs)


class EventRetrieveView(generics.RetrieveAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)
