# Generated by Django 3.2.6 on 2022-04-21 04:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('delivery', '0002_restaurant_manager'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='restaurant',
            name='manager',
        ),
    ]
