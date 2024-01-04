from rest_framework import serializers
from django.contrib.auth.models import User
from objects.models import Wilaya, Commune, Address, Category
from accounts.models import Lawyer

class LawyerSignupSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(max_length=50)
    wilaya = serializers.PrimaryKeyRelatedField(queryset=Wilaya.objects.all())
    commune = serializers.PrimaryKeyRelatedField(queryset=Commune.objects.all())
    Address = serializers.CharField(max_length=30)
    experience = serializers.DecimalField(max_digits=5, decimal_places=2)
    category = serializers.CharField(max_length=30)
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    link_to_personal_website = serializers.URLField(required=False)

    class Meta:
        model = User
        fields = ('fullname', 'username', 'password', 'wilaya', 'commune', 'Address', 'experience', 'category', 'description', 'link_to_personal_website')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            password=validated_data['password']
        )
        address = Address.objects.get(id=validated_data['address'])
        categories = Category.objects.filter(id__in=validated_data['categories'])
        wilaya = validated_data['wilaya']
        commune = validated_data['commune']
        lawyer = Lawyer.objects.create(
            user=user,
            address=address,
            wilaya=wilaya,
            commune=commune,
            link_to_personal_website=validated_data.get('link_to_personal_website', ''),
            activated=validated_data.get('activated', False)
        )
        lawyer.categories.set(categories)
        lawyer.save()
        return lawyer