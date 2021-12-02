from django.urls import path

from .views import create_user, get_user, login, generate_new_tokens, edit_profile, add_event

urlpatterns = [
    path('create/', create_user),
    path('login/', login),
    path('profile/', get_user),
    path('refresh/', generate_new_tokens),
    path('edit/', edit_profile),
    path('add-event/', add_event),
]