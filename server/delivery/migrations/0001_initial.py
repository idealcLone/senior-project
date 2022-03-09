# Generated by Django 3.2.6 on 2022-03-09 09:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('price', models.IntegerField()),
                ('image', models.ImageField(upload_to='foods/')),
                ('is_available', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='restaurants/')),
                ('location', models.CharField(max_length=100, null=True)),
                ('phone_number', models.CharField(max_length=20)),
                ('telegram', models.CharField(max_length=100, null=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('status', models.CharField(max_length=100)),
                ('block', models.IntegerField()),
                ('room', models.IntegerField()),
                ('price', models.IntegerField()),
                ('comment', models.CharField(max_length=500)),
                ('food', models.ManyToManyField(related_name='foods', to='delivery.Food')),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery.restaurant')),
            ],
        ),
        migrations.AddField(
            model_name='food',
            name='restaurant',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='delivery.restaurant'),
        ),
    ]
