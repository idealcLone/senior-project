# Generated by Django 3.2.6 on 2022-04-20 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sp_course', '0022_event_users'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=1000)),
            ],
        ),
    ]