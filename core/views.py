from django.shortcuts import render


def index(request):
    return render(request, "views/index.html", {})


def login(request):
    return render(request, "views/login.html", {})
