# Generated by Django 3.2.6 on 2021-11-15 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sp_course', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='image',
            field=models.ImageField(null=True, upload_to='../../media/events'),
        ),
    ]
