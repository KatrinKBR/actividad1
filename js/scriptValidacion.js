$(document).ready(function () {
    $('#nombre-vacio').hide();
    $("#nombre-inv").hide();
    $('#edad-vacio').hide();
    $("#edad-inv").hide();
    $('#correo-vacio').hide();
    $("#correo-inv").hide();
    $('#num-vacio').hide();
    $("#num-inv").hide();
    $('#btn-submit').click(function(){
        validar_datos();
        setTimeout(function(){ document.formulario.submit(); }, 3000);
    }) 
});

function validar_datos(){ 
    // Expresion regular para verificar que son solo letras
    var expLetras = /^[a-zA-Z]+$/;
    // Expresion regular para verificar que son solo numeros y que empieza por 9
    var expNumeros = /^9[0-9].*$/;

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
    }
    
    // Validamos la edad: no puede estar vacio y mayores de 13
    edad = parseInt(document.getElementById("edad").value);
    if (isNaN(edad)){
        $("#edad").addClass("is-invalid");
        $("#edad-inv").hide();
        $("#edad-vacio").show();
        document.getElementById("edad").focus();
        return false;
    }else if (edad<13){
        $("#edad").addClass("is-invalid");
        $("#edad-inv").show();
        $("#edad-vacio").hide();
        document.getElementById("edad").focus()
        return false;
    } else {
        $("#edad").removeClass("is-invalid");
        $("#edad").addClass("is-valid");
        $('#edad-vacio').hide();
        $("#edad-inv").hide();
    }

    // Validamos el correo: no puede estar vacio y debe tener el formato
    var email = document.getElementById("correo").value;  
    var arroba = email.indexOf("@");  
    var punto = email.lastIndexOf(".");  
    if(document.getElementById("correo").value.length==0){
        $("#correo").addClass("is-invalid");
        $("#correo-inv").hide();
        $("#correo-vacio").show();
        document.getElementById("correo").focus();
        return false;
    } else if (arroba<1 || punto<arroba+2 || punto+2>=email.length){  
        $("#correo").addClass("is-invalid");
        $("#correo-inv").show();
        $("#correo-vacio").hide();
        return false;  
    } else {
        $("#correo").removeClass("is-invalid");
        $("#correo").addClass("is-valid");
        $('#correo-vacio').hide();
        $("#correo-inv").hide();
    }

    // Validamos el numero: no puede estar vacio y deben ser 9 caracteres
    num = parseInt(document.getElementById("num").value);
    if(isNaN(num)){
        $("#num").addClass("is-invalid");
        $("#num-inv").hide();
        $("#num-vacio").show();
        document.getElementById("num").focus();
        return false;
    } else if(!(document.getElementById("num").value.match(expNumeros) && num.toString().length == 9)) {
        $("#num").addClass("is-invalid");
        $("#num-inv").show();
        $("#num-vacio").hide();
        document.getElementById("num").focus();
        return false;
    } else {
        $("#num").removeClass("is-invalid");
        $("#num").addClass("is-valid");
        $('#num-vacio').hide();
        $("#num-inv").hide();
    }

    $('#myModal').modal('show'); 
}