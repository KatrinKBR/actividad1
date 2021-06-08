from django import forms
from django.forms import ModelForm, fields, widgets
from .models import Mascota

class MascotaForm(ModelForm):
    class Meta:
        model = Mascota
        fields=['nro_chip','nombre','genero','edad','especie','esterilizado']

        widgets = {
            'nro_chip': forms.TextInput(attrs={'class':'form-control'}),
            'nombre': forms.TextInput(attrs={'class':'form-control'}),
            'genero': forms.TextInput(attrs={'class':'form-control'}),
            'edad': forms.TextInput(attrs={'class':'form-control'}),
            'especie': forms.TextInput(attrs={'class':'form-control'}),
            'esterilizado': forms.CheckboxInput(attrs={'class':'form-check-input'})
        }