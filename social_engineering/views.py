from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

# Create your views here.
def login(request):
	return render(request, 'social_engineering/login.html', {})
