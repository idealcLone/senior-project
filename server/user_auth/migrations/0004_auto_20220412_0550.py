# Generated by Django 3.2.6 on 2022-04-12 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_auth', '0003_user_is_restaurant_manager'),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(choices=[('ADMIN', 'ADMIN'), ('MANAGER', 'MANAGER'), ('CLUB_LEADER', 'CLUB_LEADER'), ('STUDENT', 'STUDENT')], default='STUDENT', max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='roles',
            field=models.ManyToManyField(related_name='roles', to='user_auth.Role'),
        ),
    ]
