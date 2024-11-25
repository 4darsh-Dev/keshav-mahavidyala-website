from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render, redirect
from .forms import AdmissionApplicationForm


# Create your views here.


def home(request):
    return render(request, 'index.html')


def admission_form(request):
    if request.method == 'POST':
        form = AdmissionApplicationForm(request.POST, request.FILES)
        if form.is_valid():
            application = form.save()
            # send_admission_confirmation_email(application)
            return redirect('admission_success')
    else:
        form = AdmissionApplicationForm()

    return render(request, 'admission_form.html', {'form': form})

def admission_success(request):
    return render(request, 'success.html')

def send_admission_confirmation_email(application):
    subject = 'Admission Application Received'
    message = f"""
    Dear {application.name},

    Thank you for submitting your admission application to Keshav Mahavidyalaya.

    We have received your application, and our team will review it shortly.

    If you have any questions or need further assistance, please don't hesitate to contact us.

    Best regards,
    Keshav Mahavidyalaya Admissions Team
    """
    from_email = settings.DEFAULT_FROM_EMAIL
    to_email = [application.email]
    send_mail(subject, message, from_email, to_email, fail_silently=False)

