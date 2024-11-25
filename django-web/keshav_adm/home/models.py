from django.db import models

# Create your models here.


class AdmissionApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    address = models.TextField()
    program = models.CharField(max_length=50)
    transcript = models.FileField(upload_to='transcripts/')
    recommendation_letter = models.FileField(upload_to='recommendation_letters/')
    id_proof = models.FileField(upload_to='id_proofs/')
    additional_information = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)