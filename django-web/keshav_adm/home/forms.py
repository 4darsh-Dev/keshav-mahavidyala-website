from django import forms
from .models import AdmissionApplication

class AdmissionApplicationForm(forms.ModelForm):
    class Meta:
        model = AdmissionApplication
        fields = [
            'name', 'email', 'phone', 'date_of_birth', 'address', 'program',
            'transcript', 'recommendation_letter', 'id_proof', 'additional_information'
        ]

    def clean(self):
        cleaned_data = super().clean()
        date_of_birth = cleaned_data.get('date_of_birth')
        if date_of_birth and date_of_birth.year > 2005:
            self.add_error('date_of_birth', 'Applicants must be at least 18 years old.')
        return cleaned_data