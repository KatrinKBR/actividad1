import datetime
from django.http.response import HttpResponse
from django.shortcuts import render, redirect
from .models import Postulante
from .models import Mascota
from appPeludo.forms import MascotaForm
from appPeludo.forms import MascotaFormMod

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

# Vista para guardar un postulante en la BD de acuerdo a los datos ingresados en el form
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
    postulante.save()
    return redirect('listarPostulante')

# Vista para listar los postulantes que esten en la BD
def listarPostulante(request):
    postulantes = Postulante.objects.all()
    return render(request, 'listarPostulante.html',{'postulantes':postulantes})

# Vista para el Mantenedor, lista las mascotas en la BD
def mascotaCRUD(request):
    mascotas = Mascota.objects.all()
    return render(request, 'mascotaCRUD.html',{'mascotas':mascotas})

# Vista para agregar una Mascota
def formMascotaAgr(request):
    datos = {
        'form' : MascotaForm()
    }
    if request.method=='POST':
        formulario = MascotaForm(request.POST)
        if formulario.is_valid:
            try:
                formulario.save()
                datos['display'] = True
                datos['mensaje'] = "Datos guardados correctamente."
                datos['estilo'] = "alert-success"
            except ValueError:
                datos['display'] = True
                datos['mensaje'] = "Ya existe una mascota con ese nro de chip."
                datos['estilo'] = "alert-danger"

    return render(request,'agregarMascota.html', datos)

# Vista para modificar una Mascota
def formMascotaMod(request, nro_chip):
    mascota = Mascota.objects.get(nro_chip=nro_chip)
    datos = {
        'form' : MascotaFormMod(instance=mascota)
    }

    if request.method=='POST':
        formulario = MascotaFormMod(data=request.POST,instance=mascota)
        if formulario.is_valid:
            formulario.save()
            datos['display'] = True
            datos['mensaje'] = "Datos modificados correctamente."
            datos['estilo'] = "alert-success"

    return render(request,'editarMascota.html', datos)

# Vista para eliminar una Mascota
def formMascotaDel(request, nro_chip):
    mascota = Mascota.objects.get(nro_chip=nro_chip)
    mascota.delete()

    return redirect('mascotaCRUD')