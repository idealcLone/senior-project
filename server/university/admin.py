from django.contrib import admin

from .models import Course, Instructor, Event

admin.site.register(Instructor)
admin.site.register(Course)
admin.site.register(Event)
