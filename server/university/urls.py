from django.urls import path

from university.views.course import CourseListView, CourseCreateView, CourseUpdateView, CourseRetrieveView
from university.views.club import ClubListView, ClubCreateView, ClubUpdateView, ClubRetrieveView
from university.views.event import EventListView, EventCreateView, EventUpdateView, EventRetrieveView
from university.views.user import UserListView, UserCreateView, UserUpdateView, UserRetrieveView
from university.views.faq import FAQListView, FAQCreateView, FAQUpdateView, FAQRetrieveView

urlpatterns = [
    path('courses/all/', CourseListView.as_view()),
    path('courses/create/', CourseCreateView.as_view()),
    path('courses/update/<int:pk>/', CourseUpdateView.as_view()),
    path('courses/<int:pk>/', CourseRetrieveView.as_view()),

    path('clubs/all/', ClubListView.as_view()),
    path('clubs/create/', ClubCreateView.as_view()),
    path('clubs/update/<int:pk>/', ClubUpdateView.as_view()),
    path('clubs/<int:pk>/', ClubRetrieveView.as_view()),

    path('events/all/', EventListView.as_view()),
    path('events/create/', EventCreateView.as_view()),
    path('events/update/<int:pk>/', EventUpdateView.as_view()),
    path('events/<int:pk>/', EventRetrieveView.as_view()),

    path('users/all/', UserListView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/update/<int:pk>/', UserUpdateView.as_view()),
    path('users/<int:pk>/', UserRetrieveView.as_view()),

    path('faq/all/', FAQListView.as_view()),
    path('faq/create/', FAQCreateView.as_view()),
    path('faq/update/<int:pk>/', FAQUpdateView.as_view()),
    path('faq/<int:pk>/', FAQRetrieveView.as_view()),
]
