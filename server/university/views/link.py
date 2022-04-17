from rest_framework import generics

from university.serializers.link import LinkSerializer
from university.models import Link


class LinkListCreateView(generics.ListCreateAPIView):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()


class LinkRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
