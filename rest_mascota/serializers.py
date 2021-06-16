from rest_framework import serializers
from appPeludo.models import Mascota

class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = ['nro_chip','nombre','genero','edad','especie','esterilizado']