from django.shortcuts import render, redirect
from django.contrib.auth import logout
from rest_framework.response import Response
from .serializers import LawyerSignupSerializer, LawyerSerializer
from rest_framework import generics
from .models import Lawyer
from rest_framework.pagination import PageNumberPagination


def logout_view(request):
    logout(request)
    return redirect('/')

class LawyerSignupView(generics.CreateAPIView):
    serializer_class = LawyerSignupSerializer


class HomeView(generics.ListAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    pagination_class = PageNumberPagination