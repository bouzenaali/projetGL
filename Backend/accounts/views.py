from django.shortcuts import redirect
from django.contrib.auth import logout
from .serializers import LawyerSignupSerializer, LawyerSerializer
from rest_framework import generics, filters
from .models import Lawyer
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend

def logout_view(request):
    logout(request)
    return redirect('/')

class LawyerSignupView(generics.CreateAPIView):
    serializer_class = LawyerSignupSerializer


class HomeView(generics.ListAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    pagination_class = PageNumberPagination

class SearchLawyerView(generics.ListAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer
    filter_backends = [filters.SearchFilter, DjangoFilterBackend]
    search_fields = ['user__username']
    filterset_fields = ['wilaya', 'categories__name']

    def get_queryset(self):
        queryset = Lawyer.objects.all()
        wilaya = self.request.query_params.get('wilaya', None)
        categories = self.request.query_params.get('categories', None)
        if wilaya is not None:
            queryset = queryset.filter(wilaya__name=wilaya)
        if categories is not None:
            queryset = queryset.filter(categories__name=categories)
        return queryset

class LawyerDetailView(generics.RetrieveAPIView):
    queryset = Lawyer.objects.all()
    serializer_class = LawyerSerializer