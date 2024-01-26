from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import Lawyer, CustomUser
from objects.models import Wilaya, Category, Address, Commune
from .serializers import LawyerSerializer

class SearchLawyerViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.wilaya = Wilaya.objects.create(name='Alger')
        self.commune = Commune.objects.create(name='Amizour', wilaya=self.wilaya)
        self.category = Category.objects.create(name='Droit civil')
        self.user = CustomUser.objects.create(username='user1')
        self.address = Address.objects.create(wilaya=self.wilaya, commune=self.commune, full_address='http://maps.google.com/?q=Street1,City1')
        self.lawyer = Lawyer.objects.create(user=self.user, address=self.address)
        self.lawyer.categories.add(self.category)

    def test_search_lawyer_view(self):
        response = self.client.get(reverse('api:accounts:search_lawyer'), {'wilaya': self.wilaya.id, 'categories': self.category.id})
        lawyers = Lawyer.objects.filter(wilaya__name='Wilaya1', categories__name='Category1')
        serializer = LawyerSerializer(lawyers, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)