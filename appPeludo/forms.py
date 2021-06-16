from django import forms
from django.forms import ModelForm, fields, widgets
from .models import Mascota

GENERO = [('1','---'),('Hembra','Hembra'),('Macho','Macho')]

ESPECIE = [('1','---'),('Perro','Perro'),('Gato','Gato')]

class MascotaForm(ModelForm):
    class Meta:
        model = Mascota
        fields=['nro_chip','nombre','genero','edad','especie','esterilizado']

        widgets = {
            'nro_chip': forms.TextInput(attrs={'class':'form-control'}),
            'nombre': forms.TextInput(attrs={'class':'form-control'}),
            'genero': forms.Select(attrs={'class':'form-select'},choices=GENERO),
            'edad': forms.TextInput(attrs={'class':'form-control'}),
            'especie': forms.Select(attrs={'class':'form-select'},choices=ESPECIE),
            'esterilizado': forms.CheckboxInput(attrs={'class':'form-check-input'})
        }

class MascotaFormMod(ModelForm):
    disabled_fields = ['nro_chip']
    class Meta:
        model = Mascota
        fields=['nro_chip','nombre','genero','edad','especie','esterilizado']

        widgets = {
            'nro_chip': forms.TextInput(attrs={'class':'form-control','readonly':'True'}),
            'nombre': forms.TextInput(attrs={'class':'form-control'}),
            'genero': forms.Select(attrs={'class':'form-select'},choices=GENERO),
            'edad': forms.TextInput(attrs={'class':'form-control'}),
            'especie': forms.Select(attrs={'class':'form-select'},choices=ESPECIE),
            'esterilizado': forms.CheckboxInput(attrs={'class':'form-check-input'})
        }

        # def clean_nro_chip(self):
        #     nro_chip = self.cleaned_data.get('nro_chip')
        #     try:
        #         match = Mascota.objects.get(nro_chip=nro_chip)
        #         raise forms.ValidationError("nro_chip ya existe")
        #     except Mascota.DoesNotExist:
        #         return nro_chip