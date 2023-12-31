from django.contrib import admin

from .models import Lawyer, Client, Admin

admin.site.register(Lawyer)
admin.site.register(Client)
admin.site.register(Admin)
