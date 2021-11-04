from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/', include('user_auth.urls')),
    path('api/', include('university.urls')),
]
