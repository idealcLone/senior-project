from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, password, **extra_fields):
        if not username or not password:
            raise ValueError('The given username or password must be set')

        user = self.model(username=AbstractBaseUser.normalize_username(username), **extra_fields)
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_user(self, username, password, **extra_fields):
        return self._create_user(username=username, password=password, **extra_fields)