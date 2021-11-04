import jwt

from datetime import datetime, timedelta

from django.conf import settings


def generate_tokens(user):
    access_token = jwt.encode({
        'exp': datetime.now() + timedelta(hours=1),
        'id': user.id,
    }, settings.SECRET_KEY, algorithm='HS256')
    refresh_token = jwt.encode({
        'exp': datetime.now() + timedelta(days=30),
        'id': user.id,
    }, settings.SECRET_KEY, algorithm='HS256')

    return access_token, refresh_token
