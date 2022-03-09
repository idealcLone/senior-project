from django.urls import path

from delivery.views import OrderCreateView, RestaurantListCreateView, RestaurantRetrieveUpdateDestroyView, \
    FoodListCreateView, FoodRetrieveUpdateDestroyView

urlpatterns = [
    path('restaurants/', RestaurantListCreateView.as_view()),
    path('restaurant/<int:pk>/', RestaurantRetrieveUpdateDestroyView.as_view()),

    path('foods/', FoodListCreateView.as_view()),
    path('food/<int:pk>/', FoodRetrieveUpdateDestroyView.as_view()),

    path('order/', OrderCreateView.as_view()),
]