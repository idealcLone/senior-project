from rest_framework import generics
from rest_framework.response import Response

from delivery.models import Restaurant, Food, Order
from delivery.serializers import RestaurantSerializer, FoodSerializer, OrderSerializer


class RestaurantListCreateView(generics.ListCreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class RestaurantRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class FoodListCreateView(generics.ListCreateAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()

    def list(self, request, *args, **kwargs):
        restaurant = self.request.query_params.get('restaurantId')
        serializer = self.serializer_class(self.queryset.filter(restaurant=restaurant))

        return Response(serializer.data)


class FoodRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()


class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
