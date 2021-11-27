from django.urls import path

from university.views.course import CourseListView, CourseCreateView, CourseUpdateView, CourseRetrieveDestroyView
from university.views.club import ClubListView, ClubCreateView, ClubUpdateView, ClubRetrieveView
from university.views.event import EventListView, EventCreateView, EventUpdateView, EventRetrieveDestroyView
from university.views.user import UserListView, UserCreateView, UserUpdateView, UserRetrieveDestroyView
from university.views.faq import FAQListView, FAQCreateView, FAQUpdateView, FAQRetrieveDestroyView
from university.views.deadline import DeadlineListView, DeadlineCreateView, DeadlineDestroyView, DeadlineUpdateView

urlpatterns = [
    path('courses/all/', CourseListView.as_view()),
    path('courses/create/', CourseCreateView.as_view()),
    path('courses/update/<int:pk>/', CourseUpdateView.as_view()),
    path('courses/<int:pk>/', CourseRetrieveDestroyView.as_view()),

    path('clubs/all/', ClubListView.as_view()),
    path('clubs/create/', ClubCreateView.as_view()),
    path('clubs/update/<int:pk>/', ClubUpdateView.as_view()),
    path('clubs/<int:pk>/', ClubRetrieveView.as_view()),

    path('events/all/', EventListView.as_view()),
    path('events/create/', EventCreateView.as_view()),
    path('events/update/<int:pk>/', EventUpdateView.as_view()),
    path('events/<int:pk>/', EventRetrieveDestroyView.as_view()),

    path('users/all/', UserListView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/update/<int:pk>/', UserUpdateView.as_view()),
    path('users/<int:pk>/', UserRetrieveDestroyView.as_view()),

    path('faq/all/', FAQListView.as_view()),
    path('faq/create/', FAQCreateView.as_view()),
    path('faq/update/<int:pk>/', FAQUpdateView.as_view()),
    path('faq/<int:pk>/', FAQRetrieveDestroyView.as_view()),

    path('deadline/all/', DeadlineListView.as_view()),
    path('deadline/create/', DeadlineCreateView.as_view()),
    path('deadline/update/<int:pk>/', DeadlineUpdateView.as_view()),
    path('deadline/<int:pk>/', DeadlineDestroyView.as_view()),
]
