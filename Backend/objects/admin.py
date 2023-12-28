from django.contrib import admin

from .models import Address, Category, Review, Blog

admin.site.register(Address)
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Blog)
