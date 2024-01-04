from allauth.account.forms import SignupForm
from django import forms
from .models import Lawyer, Wilaya, Commune, Category, Address  


class LawyerSignupForm(SignupForm):
    wilaya = forms.CharField(max_length=30, label='wilaya')
    commune = forms.CharField(max_length=30, label='commune')
    Address = forms.CharField(max_length=30, label='address')
    experience = forms.DecimalField(max_length=30, label='experience')
    category = forms.CharField(max_length=500, label='category')
    description = forms.TextField(max_length=30, label='description')

    def save(self, request):
        user = super(LawyerSignupForm, self).save(request)
        wilaya = Wilaya.objects.get(name=self.cleaned_data.get('wilaya'))
        commune = Commune.objects.get(name=self.cleaned_data.get('commune'))
        address = Address.objects.get(name=self.cleaned_data.get('address'))
        category = Category.objects.get(name=self.cleaned_data.get('category'))
        experience = self.cleaned_data.get('experience')
        description = self.cleaned_data.get('description')
        lawyer = Lawyer.objects.create(
            user=user,
            wilaya=wilaya,
            commune=commune,
            address=address,
            category=category,
            experience=experience,
            description=description
        )
        lawyer.save()
        return user