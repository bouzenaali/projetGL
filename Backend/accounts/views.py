from django.shortcuts import render, redirect
from django.contrib.auth import logout
from rest_framework.response import Response


def home(request):
    return Response({'message': 'you are logged in'})

def logout_view(request):
    logout(request)
    return redirect('/')



