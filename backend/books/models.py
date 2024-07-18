from django.db import models

class Book(models.Model):
    name = models.CharField(max_length=200, blank=False, unique=True)
    synopsis = models.CharField(max_length=1000, blank=True)


class Review(models.Model): 
    book = models.ForeignKey(
        Book,
        on_delete=models.PROTECT,
        blank=False,
        null=True
    )

    username = models.CharField(max_length=30)
    body = models.CharField(max_length=1000)