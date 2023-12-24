from django.db import models
from accounts.models import Lawyer

class Address(models.Model):
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    full_address = models.URLField(blank=True, null=True) # google maps link


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Review(models.Model):
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    reviewer_name = models.CharField(max_length=255)
    reviewer_email = models.EmailField()
    review_text = models.TextField()
    number_of_stars = models.IntegerField()

    def __str__(self):
        return self.review_text

class Blog(models.Model):
    lawyer = models.ForeignKey(Lawyer, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    content = models.TextField()

    def __str__(self):
        return self.title