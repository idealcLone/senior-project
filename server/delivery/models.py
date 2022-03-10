from django.db import models


class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='restaurants/')
    location = models.CharField(max_length=100, null=True)

    phone_number = models.CharField(max_length=20)
    telegram = models.CharField(max_length=100, null=True)

    is_active = models.BooleanField(default=True)


class Food(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField()
    image = models.ImageField(upload_to='foods/')

    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)

    is_available = models.BooleanField(default=True)


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=100)
    block = models.IntegerField()
    room = models.IntegerField()
    price = models.IntegerField()
    comment = models.CharField(max_length=500)

    food = models.ManyToManyField(Food, related_name='foods')
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
