from allauth.account.forms import SignupForm
from django import forms


class LawyerSignupForm(SignupForm):
    Wilaya = forms.CharField(max_length=30, label='wilaya')
    Commune = forms.CharField(max_length=30, label='commune')
    Address = forms.CharField(max_length=30, label='address')
    experience = forms.DecimalField(max_length=30, label='experience')
    category = forms.CharField(max_length=500, label='category')
    description = forms.TextField(max_length=30, label='description')

    def save(self, request):
        user = super(LawyerSignupForm, self).save(request)
        user.extra_field = self.cleaned_data.get('extra_field')
        user.Wilaya = self.cleaned_data.get('wilaya')
        user.Commune = self.cleaned_data.get('commune')
        user.Address = self.cleaned_data.get('address')
        user.experience = self.cleaned_data.get('experience')
        user.category = self.cleaned_data.get('category')
        user.description = self.cleaned_data.get('description')
        user.save()
        return user