import json
from django.core.management.base import BaseCommand
from objects.models import Wilaya, Commune

class Command(BaseCommand):
    help = 'Populate the Wilaya and Commune tables with data'

    Wilaya.objects.all().delete()
    Commune.objects.all().delete()

    def handle(self, *args, **kwargs):
        # Load the data from the JSON file
        with open('../algeria_cities.json', 'r' ,encoding='utf-8') as f:
            data = json.load(f)

        # Create a dictionary to store the Wilaya objects and avoid duplicates
        wilayas = {}

        # Iterate over the data
        for item in data:
            # Get the Wilaya name
            wilaya_name = item['wilaya_name']

            # If this Wilaya has not been created yet, create it
            if wilaya_name not in wilayas:
                wilayas[wilaya_name] = Wilaya.objects.create(name=wilaya_name)

            # Create a new Commune for this Wilaya
            Commune.objects.create(name=item['commune_name'], wilaya=wilayas[wilaya_name])
