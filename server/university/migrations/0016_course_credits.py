# Generated by Django 3.2.6 on 2022-04-05 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sp_course', '0015_remove_event_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='credits',
            field=models.IntegerField(default=6, null=True),
        ),
    ]