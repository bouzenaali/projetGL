from django.shortcuts import render
from rest_framework import generics
from .serializers import WilayaSerializer, CommuneSerializer
from .models import Wilaya, Commune

class WilayaList(generics.ListAPIView):
    queryset = Wilaya.objects.all()
    serializer_class = WilayaSerializer

class CommuneList(generics.ListAPIView):
    serializer_class = CommuneSerializer

    def get_queryset(self):
        wilaya = self.kwargs['wilaya']
        return Commune.objects.filter(wilaya=wilaya)
