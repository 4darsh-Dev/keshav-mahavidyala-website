from django.contrib import admin
from django.urls import path,include

from . import views

urlpatterns = [
    
    path('', views.home, name='home'),
    path('admission_form', views.admission_form, name='admission_form'),
]