from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response

from university.serializers.faq import FAQSerializer

from university.models import FAQ


class FAQListView(generics.ListAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()


class FAQCreateView(generics.CreateAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()
    permission_classes = (IsAdminUser,)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class FAQUpdateView(generics.UpdateAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()
    permission_classes = (IsAdminUser,)

    def update(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().update(request, pk, **kwargs)


class FAQRetrieveView(generics.RetrieveAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)
