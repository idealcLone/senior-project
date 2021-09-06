from django.db import models


class Course(models.Model):
    code = models.CharField(max_length=10, null=False)
    name = models.CharField(max_length=100, null=False)
    start_time = models.TimeField(blank=True)
    end_time = models.TimeField(blank=True)
    days = models.CharField(max_length=3, null=False)
    syllabus = models.BooleanField(default=False)
    professor_name = models.CharField(max_length=50, null=False)

    def __str__(self):
        return self.name
