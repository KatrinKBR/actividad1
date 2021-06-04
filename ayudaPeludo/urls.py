"""ayudaPeludo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import appPeludo.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', appPeludo.views.home, name='Inicio'),
    path('home/', appPeludo.views.home, name='Inicio'),
    path('adopta/', appPeludo.views.adopta, name='Adopta'),
    path('ayudanos/', appPeludo.views.ayudanos, name='Ayudanos'),
    path('cachulo/', appPeludo.views.cachulo, name='Cachulo'),
    path('contactanos/', appPeludo.views.contactanos, name='Contactanos'),
    path('flaca/', appPeludo.views.flaca, name='Flaca'),
    path('formadopc/', appPeludo.views.formadopc, name='Formadopc'),
    path('gatos/', appPeludo.views.gatos, name='Gatos'),
    path('ginger/', appPeludo.views.ginger, name='Ginger'),
    path('lucifer/', appPeludo.views.lucifer, name='Lucifer'),
    path('niña/', appPeludo.views.niña, name='Niña'),
    path('nosotros/', appPeludo.views.nosotros, name='Nosotros'),
    path('perros/', appPeludo.views.perros, name='Perros'),
    path('tommy/', appPeludo.views.tommy, name='Tommy'),
    path('crearPostulante/', appPeludo.views.crearPostulante, name='crearPostulante'),
    path('listarPostulante/', appPeludo.views.listarPostulante, name='listarPostulante'),
    path('guardarPostulante/', appPeludo.views.guardarPostulante, name='guardarPostulante'),
    #path('formPostulante/', appPeludo.views.formPostulante, name='formPostulante'),
]
