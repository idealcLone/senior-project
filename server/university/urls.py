from django.urls import path

from university.views.course import CourseListView, CourseCreateView, CourseUpdateView, CourseRetrieveDestroyView, \
    upload_syllabus, InstructorListView
from university.views.club import ClubListView, ClubCreateView, ClubUpdateView, ClubRetrieveDestroyView
from university.views.event import EventListView, EventCreateView, EventUpdateView, EventRetrieveDestroyView, \
    add_user_to_event, remove_user_from_event
from university.views.user import UserListView, UserCreateView, UserUpdateView, UserRetrieveDestroyView
from university.views.faq import FAQListView, FAQCreateView, FAQUpdateView, FAQRetrieveDestroyView
from university.views.deadline import DeadlineListView, DeadlineCreateView, DeadlineDestroyView, DeadlineUpdateView
from university.views.link import LinkListCreateView, LinkRetrieveUpdateDestroyView

urlpatterns = [
    path('courses/all/', CourseListView.as_view()),
    path('courses/create/', CourseCreateView.as_view()),
    path('courses/update/<int:pk>/', CourseUpdateView.as_view()),
    path('courses/<int:pk>/', CourseRetrieveDestroyView.as_view()),
    path('courses/upload-syllabus/', upload_syllabus),
    path('instructors/all/', InstructorListView.as_view()),

    path('clubs/all/', ClubListView.as_view()),
    path('clubs/create/', ClubCreateView.as_view()),
    path('clubs/update/<int:pk>/', ClubUpdateView.as_view()),
    path('clubs/<int:pk>/', ClubRetrieveDestroyView.as_view()),

    path('events/all/', EventListView.as_view()),
    path('events/create/', EventCreateView.as_view()),
    path('events/update/<int:pk>/', EventUpdateView.as_view()),
    path('events/<int:pk>/', EventRetrieveDestroyView.as_view()),
    path('events/add_user/', add_user_to_event),
    path('events/remove_user/', remove_user_from_event),

    path('users/all/', UserListView.as_view()),
    path('users/create/', UserCreateView.as_view()),
    path('users/update/<int:pk>/', UserUpdateView.as_view()),
    path('users/<int:pk>/', UserRetrieveDestroyView.as_view()),

    path('faqs/all/', FAQListView.as_view()),
    path('faqs/create/', FAQCreateView.as_view()),
    path('faqs/update/<int:pk>/', FAQUpdateView.as_view()),
    path('faqs/<int:pk>/', FAQRetrieveDestroyView.as_view()),

    path('deadline/all/', DeadlineListView.as_view()),
    path('deadline/create/', DeadlineCreateView.as_view()),
    path('deadline/update/<int:pk>/', DeadlineUpdateView.as_view()),
    path('deadline/<int:pk>/', DeadlineDestroyView.as_view()),

    path('links/all/', LinkListCreateView.as_view()),
    path('links/create/', LinkListCreateView.as_view()),
    path('links/update/<int:pk>/', LinkRetrieveUpdateDestroyView.as_view()),
    path('links/<int:pk>/', LinkRetrieveUpdateDestroyView.as_view()),
]
