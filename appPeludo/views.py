from django.shortcuts import render

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
