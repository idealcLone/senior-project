from django.contrib import admin

from .models import Course, Instructor, Term, School

admin.site.register(Instructor)
admin.site.register(Term)
admin.site.register(School)
admin.site.register(Course)
