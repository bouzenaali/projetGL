from django.urls import path
from . import views
from .views import LawyerSignupView, HomeView

app_name = 'accounts'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('logout/', views.logout, name='logout'),
    path('signup/lawyer/', LawyerSignupView.as_view(), name='lawyer_signup'),
]