from django.urls import path

from delivery.views import OrderCreateView, RestaurantListCreateView, RestaurantRetrieveUpdateDestroyView, \
    FoodListCreateView, FoodRetrieveUpdateDestroyView, RestaurantUpdateView, FoodUpdateView, FoodListView

urlpatterns = [
    path('restaurants/', RestaurantListCreateView.as_view()),
    path('restaurants/all/', RestaurantListCreateView.as_view()),
    path('restaurants/<int:pk>/', RestaurantRetrieveUpdateDestroyView.as_view()),
    path('restaurants/update/<int:pk>/', RestaurantUpdateView.as_view()),

    path('foods/', FoodListCreateView.as_view()),
    path('foods/all/', FoodListView.as_view()),
    path('foods/<int:pk>/', FoodRetrieveUpdateDestroyView.as_view()),
    path('foods/update/<int:pk>/', FoodUpdateView.as_view()),

    path('order/', OrderCreateView.as_view()),
]