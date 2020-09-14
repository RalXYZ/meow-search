from django.db import models


class Result(models.Model):
    title = models.CharField(max_length=50)
    source = models.CharField(max_length=20)
    time = models.CharField(max_length=30)  # TODO use models.DateTimeField
    content = models.CharField(max_length=3000)

    def __str__(self):
        return self.title
