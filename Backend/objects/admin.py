from django.contrib import admin

from .models import Address, Category, Review, Blog, Wilaya, Commune

admin.site.register(Address)
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Blog)
admin.site.register(Wilaya)
admin.site.register(Commune)
