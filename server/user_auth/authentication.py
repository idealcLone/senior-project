import jwt
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import exceptions, status
from rest_framework.authentication import BaseAuthentication, get_authorization_header
from rest_framework.response import Response

User = get_user_model()


class SPAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('TOKEN')

        if token is None:
            return None

        return self.authenticate_credentials(token)

    def authenticate_credentials(self, token):
        payload = jwt.decode(token, settings.SECRET_KEY, 'HS256')
        user_id = payload['id']

        try:
            user = User.objects.get(id=user_id)

            return user, None

        except ObjectDoesNotExist:
            return Response('Invalid user', status=status.HTTP_401_UNAUTHORIZED)
        except jwt.ExpiredSignature or jwt.DecodeError or jwt.InvalidTokenError:
            return Response('Invalid token', status=status.HTTP_401_UNAUTHORIZED)
