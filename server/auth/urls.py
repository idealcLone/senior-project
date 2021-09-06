from django.urls import path

from .views import create_user, MyTokenObtainPairView, UserRetrieveView

urlpatterns = [
    path('create/', create_user),
    path('login/', MyTokenObtainPairView.as_view()),
    path('profile/', UserRetrieveView.as_view()),
]