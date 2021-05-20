$(document).ready(function () {
    $('#nombre-vacio').hide();
    $("#nombre-inv").hide();
    $('#fecha-vacio').hide();
    $("#fecha-inv").hide();
    $('#direccion-vacio').hide();
    $('#num-vacio').hide();
    $('#ciudad-vacio').hide();
    $("#ciudad-inv").hide();
    $("#region-vacio").hide();
    $("#condiciones-vacio").hide();
    $('#btn-submit').click(function(){
        if(validar_datos()) {
            setTimeout(function(){ document.formulario.submit(); }, 3000);
        }        
    }); 
});

function validar_datos(){ 
    var edadMin = 18;
    // Expresion regular para verificar que son solo letras
    var expLetras = /^[a-zA-Z" "]+$/;
    // Expresion regular para verificar que son solo numeros
    var expNumeros = /^[0-9].*$/;
    // Variables para determinar si la validacion fue exitosa o no
    var flagN = false;
    var flagD = false;
    var flagNum = false;
    var flagC = false;
    var flagR = false;
    var flagF = false;
    var flagCon = false;
    var flag = false;

    // Validamos el nombre: no puede estar vacio y que solo sean letras
    if(document.getElementById("nombre").value.length==0) {
        $("#nombre").addClass("is-invalid");
        $("#nombre-inv").hide();
        $("#nombre-vacio").show();
        document.getElementById("nombre").focus();
        return false;
    } else if (!document.getElementById("nombre").value.match(expLetras)) {
        $("#nombre").addClass("is-invalid");
        $('#nombre-vacio').hide();
        $("#nombre-inv").show();
        document.getElementById("nombre").focus();
        return false;
    } else {
        $("#nombre").removeClass("is-invalid");
        $("#nombre").addClass("is-valid");
        $('#nombre-vacio').hide();
        $("#nombre-inv").hide();
        flagN = true;
    }

    // Validamos la fecha de nacimiento: no puede estar vacia y tiene que ser alguien mayor de 18
    // Llamada a la funcion calcularEdad que obtiene la diferencia entre la fecha actual y la ingresada
    var edad = calcularEdad();
    if(document.getElementById("fecha").value == "") {
        $("#fecha").addClass("is-invalid");
        $("#fecha-inv").hide();
        $("#fecha-vacio").show();
        document.getElementById("fecha").focus();
        return false
    } else if (edad < edadMin) {
        $("#fecha").addClass("is-invalid");
        $('#fecha-vacio').hide();
        $("#fecha-inv").show();
        document.getElementById("fecha").focus();
        return false;
    } else {
        $("#fecha").removeClass("is-invalid");
        $("#fecha").addClass("is-valid");
        $('#fecha-vacio').hide();
        $("#fecha-inv").hide();
        flagF = true;
    }

    // Validamos la direccion: no puede estar vacia
    if(document.getElementById("direccion").value.length==0) {
        $("#direccion").addClass("is-invalid");
        $("#direccion-vacio").show();
        document.getElementById("direccion").focus();
        return false;
    } else {
        $("#direccion").removeClass("is-invalid");
        $("#direccion").addClass("is-valid");
        $('#direccion-vacio').hide();
        flagD = true;
    }

    // Validamos la numeracion: no puede estar vacia
    if(document.getElementById("num").value.length==0) {
        $("#num").addClass("is-invalid");
        $("#num-vacio").show();
        document.getElementById("num").focus();
        return false;
    } else {
        $("#num").removeClass("is-invalid");
        $("#num").addClass("is-valid");
        $('#num-vacio').hide();
        flagNum = true;
    }

    // Validamos la ciudad: no puede estar vacia y que solo sean letras
    if(document.getElementById("ciudad").value.length==0) {
        $("#ciudad").addClass("is-invalid");
        $("#ciudad-inv").hide();
        $("#ciudad-vacio").show();
        document.getElementById("ciudad").focus();
        return false;
    } else if (!document.getElementById("ciudad").value.match(expLetras)) {
        $("#ciudad").addClass("is-invalid");
        $('#ciudad-vacio').hide();
        $("#ciudad-inv").show();
        document.getElementById("ciudad").focus();
        return false;
    } else {
        $("#ciudad").removeClass("is-invalid");
        $("#ciudad").addClass("is-valid");
        $('#ciudad-vacio').hide();
        $("#ciudad-inv").hide();
        flagC = true;
    }

    // Validamos la region: debe seleccionar una opcion valida
    region = document.getElementById('region'); 
    if (region.value) {
        $("#region").removeClass("is-invalid");
        $("#region").addClass("is-valid");
        $("#region-vacio").hide();
        flagR = true;
    } else {
        $("#region").addClass("is-invalid");
        $("#region-vacio").show();
        document.getElementById("region").focus();
        return false;
    }

    // Validamos que el checkbox fue seleccionado
    if(!document.getElementById("condiciones").checked) {
        $("#condiciones").addClass("is-invalid");
        $("#condiciones-vacio").show();
        document.getElementById("condiciones").focus();
        return false;
    } else {
        $("#condiciones").removeClass("is-invalid");
        $("#condiciones").addClass("is-valid");
        $("#condiciones-vacio").hide();
        flagCon = true;
    }
   
    // Chequeamos que se cumplan todos los requerimientos
    if(flagN==true && flagF==true && flagD==true && flagNum==true && flagC==true && flagR==true && flagCon==true) {
        flag = true;
        $('#myModal').modal('show');
        return flag;
    }

  
    
}

// Funcion que calcula los años entre la fecha actual y la ingresada en el form
function calcularEdad() {
    var fechaNac = new Date(document.getElementById("fecha").value);
    var hoy = new Date();

    // Esta funcion retorna la diferencia entre dos fechas en milisegundos
    var diferencia = Math.abs(hoy.getTime() - fechaNac.getTime()); 
    // Se convierte los milisegundos en año/mes
    var edad = Math.ceil(diferencia / (1000 * 3600 * 24)) / 365;
    return edad;
}
