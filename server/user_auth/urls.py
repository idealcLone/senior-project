from django.urls import path

from rest_framework.authtoken.views import obtain_auth_token

from .views import create_user, get_user, login

urlpatterns = [
    path('create/', create_user),
    path('login/', login),
    path('profile/', get_user),
]