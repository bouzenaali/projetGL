from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import Lawyer, CustomUser
from objects.models import Wilaya, Category, Address, Commune
from .serializers import LawyerSerializer
from rest_framework.test import APITestCase
import json


class HomeViewTest(APITestCase):
    def setUp(self):
        # Load the data from the JSON file
        with open("../data.json") as f:
            data = json.load(f)

        # Iterate over the data and create Lawyer instances
        for i, item in enumerate(data):
            # Stop after creating 10 lawyers
            if i >= 10:
                break
            # Create a CustomUser instance
            user = CustomUser.objects.create_user(username=item['full_name'], email=f"{item['full_name']}@default.com", password='defaultpassword')

            # Create or get the Category instances
            categories = [Category.objects.get_or_create(name=name)[0] for name in item['categories'][0].split(', ')]

            # Create or get the Wilaya, Commune, and Address instances
            wilaya = Wilaya.objects.get_or_create(name=item['address'])[0]
            commune = Commune.objects.get_or_create(name=item['address'], wilaya=wilaya)[0]
            address = Address.objects.get_or_create(full_address=item['address'])[0]

            # Create the Lawyer instance
            lawyer = Lawyer(user=user, link_to_personal_website='', wilaya=wilaya, commune=commune, address=address, activated=True)
            lawyer.save()

            # Add the categories to the Lawyer instance
            lawyer.categories.set(categories)
    def test_home_view(self):
        url = reverse('api:accounts:home')
        response = self.client.get(url)
        lawyers = Lawyer.objects.all()
        serializer = LawyerSerializer(lawyers, many=True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, serializer.data)


class SearchLawyerViewTest(TestCase):
    def setUp(self):  
        self.client = Client()
        self.wilaya, _ = Wilaya.objects.get_or_create(name='In Salah')
        self.commune, _ = Commune.objects.get_or_create(name='Amizour', wilaya=self.wilaya)
        self.category = Category.objects.create(name='Droit civil')
        self.user = CustomUser.objects.create(username='ahemd')
        self.address = Address.objects.create(wilaya=self.wilaya, commune=self.commune, full_address='http://maps.google.com/?q=Street1,City1')
        self.lawyer = Lawyer.objects.create(user=self.user, address=self.address)
        self.lawyer.categories.add(self.category)

    def test_search_lawyer_view(self):
        response = self.client.get(reverse('api:accounts:search_lawyer'), {'wilaya': self.Wilaya.id, 'categories': self.category.id})
        lawyers = Lawyer.objects.filter(wilaya__name='In Salah', categories__name='Droit civil')
        serializer = LawyerSerializer(lawyers, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class LawyerDetailViewTestCase(TestCase):
    def setUp(self):
    # Load the data from the JSON file
        with open("../data.json") as f:
            data = json.load(f)

        # Iterate over the data and create Lawyer instances
        for i, item in enumerate(data):
            # Stop after creating 10 lawyers
            if i >= 10:
                break
            # Create a CustomUser instance
            user = CustomUser.objects.create_user(username=item['full_name'], password='defaultpassword')

            # Create or get the Category instances
            categories = [Category.objects.get_or_create(name=name)[0] for name in item['categories'][0].split(', ')]

            # Create or get the Wilaya, Commune, and Address instances
            wilaya = Wilaya.objects.get_or_create(name=item['address'])[0]
            commune = Commune.objects.get_or_create(name=item['address'], wilaya=wilaya)[0]
            address = Address.objects.get_or_create(full_address=item['address'])[0]

            # Create the Lawyer instance
            lawyer = Lawyer(user=user, link_to_personal_website='', wilaya=wilaya, commune=commune, address=address, activated=True)
            lawyer.save()

            # Add the categories to the Lawyer instance
            lawyer.categories.set(categories)

    def test_lawyer_detail_view(self):
        response = self.client.get(reverse('accounts:lawyer_detail', kwargs={'pk': self.lawyer.pk}))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['id'], self.lawyer.id)