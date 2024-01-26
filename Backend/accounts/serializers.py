from rest_framework import serializers
from objects.models import Wilaya, Commune, Address, Category
from accounts.models import Lawyer, CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class LawyerSignupSerializer(serializers.ModelSerializer):
    user = CustomUserSerializer()
    fullname = serializers.CharField(max_length=50)
    email = serializers.CharField(max_length=50)
    wilaya = serializers.PrimaryKeyRelatedField(queryset=Wilaya.objects.all())
    commune = serializers.PrimaryKeyRelatedField(queryset=Commune.objects.all())
    Address = serializers.CharField(max_length=200)
    experience = serializers.DecimalField(max_digits=5, decimal_places=2)
    categories = serializers.CharField(style={'base_template': 'textarea.html'})
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    link_to_personal_website = serializers.URLField(required=False)

    class Meta:
        model = Lawyer
        fields = ('user', 'fullname', 'email', 'wilaya', 'commune', 'Address', 'experience', 'categories', 'description', 'link_to_personal_website')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        custom_user = CustomUser.objects.create_user(**user_data)
        address_data = validated_data.pop('address')
        address = Address.objects.create(**address_data)
        categories = validated_data['categories']
        email = validated_data['email']
        wilaya = validated_data['wilaya']
        commune = validated_data['commune']
        lawyer = Lawyer.objects.create(
            user=custom_user,
            email=email,
            address=address,
            wilaya=wilaya,
            commune=commune,
            link_to_personal_website=validated_data.get('link_to_personal_website', ''),
            activated=validated_data.get('activated', False)
        )
        lawyer.categories.set(categories)
        lawyer.save()
        return lawyer