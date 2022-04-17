from rest_framework import generics
from rest_framework.response import Response

from delivery.models import Restaurant, Food, Order
from delivery.serializers import RestaurantSerializer, RestaurantUpdateSerializer, FoodSerializer, FoodUpdateSerializer, OrderSerializer


class RestaurantListCreateView(generics.ListCreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class RestaurantRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class RestaurantUpdateView(generics.UpdateAPIView):
    serializer_class = RestaurantUpdateSerializer
    queryset = Restaurant.objects.all()


class FoodListView(generics.ListAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()


class FoodListCreateView(generics.ListCreateAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()

    def list(self, request, *args, **kwargs):
        restaurant = self.request.query_params.get('restaurant')
        serializer = self.serializer_class(self.queryset.filter(restaurant=restaurant), many=True)

        return Response(serializer.data)


class FoodRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()


class FoodUpdateView(generics.UpdateAPIView):
    serializer_class = FoodUpdateSerializer
    queryset = Food.objects.all()


class OrderCreateView(generics.CreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
