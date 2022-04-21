# Generated by Django 3.2.6 on 2022-04-05 17:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sp_course', '0018_auto_20220405_1728'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='alt_name',
        ),
        migrations.CreateModel(
            name='Recitation',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('number', models.IntegerField()),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sp_course.course')),
            ],
        ),
        migrations.CreateModel(
            name='Lecture',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('number', models.IntegerField()),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sp_course.course')),
            ],
        ),
        migrations.CreateModel(
            name='Lab',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('number', models.IntegerField()),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sp_course.course')),
            ],
        ),
    ]