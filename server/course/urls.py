from django.urls import path

from .views.course import CourseListView, CourseCreateView, CourseUpdateView, CourseRetrieveView

urlpatterns = [
    path('all/', CourseListView.as_view()),
    path('create/', CourseCreateView.as_view()),
    path('update/<int:pk>/', CourseUpdateView.as_view()),
    path('<int:pk>/', CourseRetrieveView.as_view()),
]