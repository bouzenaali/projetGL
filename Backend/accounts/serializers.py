from rest_framework import serializers
from django.contrib.auth.models import User

class LawyerSignupSerializer(serializers.ModelSerializer):
    fullname = serializers.CharField(max_length=50)
    Wilaya = serializers.CharField(max_length=30)
    Commune = serializers.CharField(max_length=30)
    Address = serializers.CharField(max_length=30)
    experience = serializers.DecimalField(max_digits=5, decimal_places=2)
    category = serializers.CharField(max_length=30)
    description = serializers.CharField(style={'base_template': 'textarea.html'})

    class Meta:
        model = User
        fields = ('fullname', 'username', 'password', 'Wilaya', 'Commune', 'Address', 'experience', 'category', 'description')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            password=validated_data['password']
        )
        user.fullname = validated_data['fullname']
        user.Wilaya = validated_data['Wilaya']
        user.Commune = validated_data['Commune']
        user.Address = validated_data['Address']
        user.experience = validated_data['experience']
        user.category = validated_data['category']
        user.description = validated_data['description']
        user.save()
        return user