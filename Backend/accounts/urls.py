from django.urls import path
from . import views
from .views import LawyerSignupView, HomeView, SearchLawyerView

app_name = 'accounts'

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('logout/', views.logout, name='logout'),
    path('signup/lawyer/', LawyerSignupView.as_view(), name='lawyer_signup'),
    path('search/', SearchLawyerView.as_view(), name='search_lawyer'),
    path('lawyer/<int:pk>/', views.LawyerDetailView.as_view(), name='lawyer_detail'),
]