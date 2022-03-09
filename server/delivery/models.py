from django.db import models


class Food(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.IntegerField()
    image = models.ImageField(upload_to='foods/')

    is_available = models.BooleanField(default=True)


# Create your models here.
class Restaurant(models.Model):
    id = models.AutoField(primary_key=True)

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='restaurants/')
    location = models.CharField(max_length=100, null=True)

    phone_number = models.CharField(max_length=20)
    telegram = models.CharField(max_length=100, null=True)

    is_active = models.BooleanField(default=True)
