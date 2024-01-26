from allauth.account.forms import SignupForm
from django import forms
from .models import Lawyer, Wilaya, Commune, Category, Address  


class LawyerSignupForm(SignupForm):

    wilaya = forms.CharField(max_length=30, label='wilaya')
    commune = forms.CharField(max_length=30, label='commune')
    Address = forms.TextField(label='address')
    experience = forms.DecimalField(max_length=30, label='experience')
    categories = forms.TextField(label='category')
    description = forms.TextField(label='description')
    link_to_personal_website = forms.URLField(required=False, label='link_to_personal_website')

    def save(self, request):
        user = super(LawyerSignupForm, self).save(request)
        email = self.cleaned_data.get('email')
        wilaya = Wilaya.objects.get(name=self.cleaned_data.get('wilaya'))
        commune = Commune.objects.get(name=self.cleaned_data.get('commune'))
        address = Address.objects.get(name=self.cleaned_data.get('address'))
        categories = Category.objects.get(name=self.cleaned_data.get('category'))
        experience = self.cleaned_data.get('experience')
        description = self.cleaned_data.get('description')
        lawyer = Lawyer.objects.create(
            user=user,
            email=email,
            wilaya=wilaya,
            commune=commune,
            address=address,
            category=categories,
            experience=experience,
            description=description
        )
        lawyer.save()
        return user