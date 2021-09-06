# Generated by Django 3.2.6 on 2021-08-28 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=100)),
                ('start_time', models.TimeField(blank=True)),
                ('end_time', models.TimeField(blank=True)),
                ('days', models.CharField(max_length=3)),
                ('syllabus', models.BooleanField(default=False)),
                ('professor_name', models.CharField(max_length=50)),
            ],
        ),
    ]