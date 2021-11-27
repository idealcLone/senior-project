from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from ..models import Deadline
from ..serializers.deadline import DeadlineCreateSerializer, DeadlineDestroySerializer, DeadlineListSerializer, \
    DeadlineUpdateSerializer


class DeadlineListView(generics.ListAPIView):
    serializer_class = DeadlineListSerializer
    queryset = Deadline.objects.all()
    permission_classes = [IsAuthenticated, ]


class DeadlineCreateView(generics.CreateAPIView):
    serializer_class = DeadlineCreateSerializer
    queryset = Deadline.objects.all()
    permission_classes = [IsAuthenticated, ]

    def create(self, request, *args, **kwargs):
        request.data['student'] = self.request.user.id
        request.data['finish_time'] = self.request.data['endDate']

        return super().create(request, *args, **kwargs)


class DeadlineDestroyView(generics.RetrieveDestroyAPIView):
    serializer_class = DeadlineDestroySerializer
    queryset = Deadline.objects.all()
    permission_classes = [IsAuthenticated, ]


class DeadlineUpdateView(generics.UpdateAPIView):
    serializer_class = DeadlineUpdateSerializer
    queryset = Deadline.objects.all()
    permission_classes = [IsAuthenticated, ]

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        request.data['student'] = self.request.user.id
        request.data['finish_time'] = self.request.data['endDate']
        request.data['is_active'] = self.request.data['isActive']

        return super().update(request, pk, **kwargs)
