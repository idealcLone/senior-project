from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('auth.urls')),
    path('api/course/', include('course.urls')),
]
