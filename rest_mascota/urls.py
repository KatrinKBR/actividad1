from django.urls import path
from rest_mascota.views import *
from rest_mascota.viewsLogin import login

urlpatterns = [
    path('lista_mascota', lista_mascota, name='lista_mascota'),
    path('detalle_mascota/<str:nro_chip>/', detalle_mascota, name='detalle_mascota'),
    path('login', login, name="login"),
]
