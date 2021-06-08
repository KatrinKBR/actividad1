import datetime
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from .models import Postulante
from .models import Mascota
from appPeludo.forms import MascotaForm

# Create your views here.
def home(request):
    return render(request,'index.html')

def adopta(request):
    return render(request,'adopta.html')

def ayudanos(request):
    return render(request,'ayudanos.html')

def cachulo(request):
    return render(request,'cachulo.html')

def contactanos(request):
    return render(request,'contactanos.html')

def flaca(request):
    return render(request,'flaca.html')

def formadopc(request):
    return render(request,'formadopc.html')

def gatos(request):
    return render(request,'gatos.html')

def ginger(request):
    return render(request,'ginger.html')
    
def lucifer(request):
    return render(request,'lucifer.html')

def niña(request):
    return render(request,'niña.html')

def nosotros(request):
    return render(request,'nosotros.html')

def perros(request):
    return render(request,'perros.html')

def tommy(request):
    return render(request,'tommy.html')

def crearPostulante(request):
    postulante = Postulante(
        rut = "13123123-3",
        nombre = "Juanito Perez",
        fecha_nac = "1990-08-23",
        direccion = "Las Acacias 450",
        numeracion = "108",
        ciudad = "Santiago",
        region = "Region Metropolitana de Santiago",
        comuna = "Santiago",
        cod_postal = "7654000",
    )
    postulante.save()
    return HttpResponse("Postulante agregado")

def listarPostulante(request):
    postulantes = Postulante.objects.all()
    return render(request, 'listarPostulante.html',{'postulantes':postulantes})

def guardarPostulante(request):
    rut = request.POST['rut']
    nombre = request.POST['nombre']
    fecha_nac = request.POST['fecha']
    direccion = request.POST['direccion']
    numeracion = request.POST['numeracion']
    ciudad = request.POST['ciudad']
    region = request.POST['region']
    comuna = request.POST['comuna']
    cod_postal = request.POST['codigoPostal']

    postulante = Postulante(
        rut = rut,
        nombre = nombre,
        fecha_nac = fecha_nac,
        direccion = direccion,
        numeracion = numeracion,
        ciudad = ciudad,
        region = region,
        comuna = comuna,
        cod_postal = cod_postal
    )

    # Manejar que el rut ingresado ya existe?
    postulante.save()
    return redirect('listarPostulante')

def mascotaCRUD(request):
    mascotas = Mascota.objects.all()
    return render(request, 'mascotaCRUD.html',{'mascotas':mascotas})

def formMascotaAgr(request):
    datos = {
        'form' : MascotaForm()
    }
    if request.method=='POST':
        formulario = MascotaForm(request.POST)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos Guardados Correctamente"

    return render(request,'agregarMascota.html', datos)

def formMascotaMod(request, nro_chip):
    mascota = Mascota.objects.get(nro_chip=nro_chip)
    datos = {
        'form' : MascotaForm(instance=mascota)
    }
    if request.method=='POST':
        formulario = MascotaForm(data=request.POST,instance=mascota)
        if formulario.is_valid:
            formulario.save()
            datos['mensaje'] = "Datos Modificados Correctamente"

    return render(request,'editarMascota.html', datos)

def formMascotaDel(request, nro_chip):
    mascota = Mascota.objects.get(nro_chip=nro_chip)
    mascota.delete()

    return redirect('mascotaCRUD')