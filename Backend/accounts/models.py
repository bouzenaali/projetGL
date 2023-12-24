from django.db import models
from django.contrib.auth.models import User

class Lawyer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.ForeignKey('objects.Address', on_delete=models.CASCADE)
    categories = models.ManyToManyField('objects.Category')
    link_to_personal_website = models.URLField(blank=True, null=True)
    activated = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
