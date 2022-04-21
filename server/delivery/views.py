from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import generics, status
from rest_framework.response import Response

from delivery.models import Restaurant, Food, Order
from delivery.serializers import RestaurantSerializer, RestaurantUpdateSerializer, FoodSerializer, FoodUpdateSerializer, \
    OrderSerializer, OrderCreateSerializer
from user_auth.models import Role


class RestaurantListCreateView(generics.ListCreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()

    def create(self, request, *args, **kwargs):
        manager_email = self.request.data['manager']
        try:
            manager_role = Role.objects.get(name='MANAGER')
        except ObjectDoesNotExist:
            manager_role = Role.objects.create(name='MANAGER')
        try:
            u = get_user_model().objects.get(email=manager_email)
            u.roles.add(manager_role)
            u.save()

            request.data._mutable = True
            request.data['manager'] = u.id
            return super().create(request, *args, **kwargs)

        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class RestaurantRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class RestaurantUpdateView(generics.UpdateAPIView):
    serializer_class = RestaurantUpdateSerializer
    queryset = Restaurant.objects.all()

    def update(self, request, *args, **kwargs):
        manager_email = self.request.data['manager']
        try:
            manager_role = Role.objects.get(name='MANAGER')
        except ObjectDoesNotExist:
            manager_role = Role.objects.create(name='MANAGER')
        try:
            u = get_user_model().objects.get(email=manager_email)
            u.roles.add(manager_role)
            u.save()

            request.data._mutable = True
            request.data['manager'] = u.id
            return super().update(request, *args, **kwargs)

        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class FoodListView(generics.ListAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()


class RestaurantFoodListView(generics.ListAPIView):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()

    def list(self, request, pk=None, **kwargs):
        restaurant = Restaurant.objects.get(pk=pk)
        return Response(self.serializer_class(self.queryset.filter(restaurant=restaurant), many=True).data)


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
    serializer_class = OrderCreateSerializer
    queryset = Order.objects.all()


class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()

    def list(self, request, pk=None, **kwargs):
        restaurant = Restaurant.objects.get(pk=pk)
        serializer = self.serializer_class(self.queryset.filter(restaurant=restaurant), many=True)

        return Response(serializer.data)
