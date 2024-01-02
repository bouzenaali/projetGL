from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('accounts/', include('accounts.urls')),
    path('objects/', include('objects.urls')),
]