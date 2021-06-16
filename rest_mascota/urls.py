from django.urls import path
from rest_mascota.views import lista_mascota

urlpatterns = [
    path('lista_mascota', lista_mascota, name='lista_mascota'),
    # path('detalle_mascota/<str:nro_chip>', name='detalle_mascota')
]
