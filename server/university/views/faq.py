from django.db import transaction
from rest_framework import generics, status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from university.serializers.faq import FAQSerializer, QuestionSerializer

from university.models import FAQ, Question


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


class FAQRetrieveDestroyView(generics.RetrieveDestroyAPIView):
    serializer_class = FAQSerializer
    queryset = FAQ.objects.all()

    def retrieve(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().retrieve(request, pk, **kwargs)

    def destroy(self, request, pk=None, **kwargs):
        if pk is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return super().destroy(request, pk, **kwargs)


class QuestionListCreateView(generics.ListCreateAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class QuestionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


@api_view(['POST'])
@transaction.atomic()
@renderer_classes([JSONRenderer])
def answer_question(request):
    question = request.data['question']
    answer = request.data['answer']

    FAQ.objects.create(question=question, answer=answer)
    Question.objects.filter(text=question).delete()

    return Response(status=status.HTTP_200_OK)
