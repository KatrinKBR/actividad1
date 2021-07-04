from django.db import models

# Create your models here.
class Postulante(models.Model):
    rut = models.CharField(max_length=10,primary_key=True)
    nombre = models.CharField(max_length=300)
    fecha_nac = models.DateField()
    direccion = models.CharField(max_length=300)
    numeracion = models.CharField(max_length=6)
    ciudad = models.CharField(max_length=300)
    region = models.CharField(max_length=400)
    comuna = models.CharField(max_length=400)
    cod_postal = models.CharField(max_length=20)

class Mascota(models.Model):
    nro_chip = models.CharField(max_length=15,primary_key=True)
    nombre = models.CharField(max_length=40)
    sexo = models.CharField(max_length=6)
    edad = models.CharField(max_length=15)
    especie = models.CharField(max_length=5)
    esterilizado = models.BooleanField()
