from django import forms
from django.forms import ModelForm, fields
from .models import Postulante

class PostulanteForm(ModelForm):
    class Meta:
        model = Postulante
        fields = ['nombre', 'fecha_nac', 'direccion', 'numeracion', 'ciudad', 'region', 'comuna', 'cod_postal']