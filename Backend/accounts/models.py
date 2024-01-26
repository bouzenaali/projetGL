from django.db import models
from django.contrib.auth.models import User, AbstractUser, Permission, Group


class CustomUser(AbstractUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)

    groups = models.ManyToManyField(Group, related_name='customuser_groups')
    user_permissions = models.ManyToManyField(
    Permission, related_name='customuser_user_permissions'
    )

    def __str__(self):
        return self.username

class Client(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    favorites = models.ManyToManyField('accounts.Lawyer', blank=True)
    review = models.ManyToManyField('objects.Review', related_name='client_reviews')

    def __str__(self):
        return self.user.username

class Lawyer(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    categories = models.ManyToManyField('objects.Category')
    link_to_personal_website = models.URLField(blank=True, null=True)
    wilaya = models.ForeignKey('objects.Wilaya', on_delete=models.SET_NULL, null=True, default=6)
    commune = models.ForeignKey('objects.Commune', on_delete=models.SET_NULL, null=True, default=1)
    address = models.ForeignKey('objects.Address', on_delete=models.CASCADE)
    activated = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

class Admin(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username