from django.urls import path
from . import views
from .views import LawyerSignupView

app_name = 'accounts'

urlpatterns = [
    path('', views.home, name='home'),
    path('logout/', views.logout, name='logout'),
    path('signup/lawyer/', LawyerSignupView.as_view(), name='lawyer_signup'),
]