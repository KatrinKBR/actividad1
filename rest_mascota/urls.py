from django.urls import path
from rest_mascota.views import *

urlpatterns = [
    path('lista_mascota', lista_mascota, name='lista_mascota'),
    path('detalle_mascota/<str:nro_chip>/', detalle_mascota, name='detalle_mascota')
]
