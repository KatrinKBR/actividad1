$(document).ready(function () {
    $('#nombre-vacio').hide();
    $("#nombre-inv").hide();
    $('#edad-vacio').hide();
    $("#edad-inv").hide();
    $('#correo-vacio').hide();
    $("#correo-inv").hide();
    $('#num-vacio').hide();
    $("#num-inv").hide();
    $("#asunto-vacio").hide();
    $("#asunto-inv").hide();
    $("#mensaje-vacio").hide();
    $("#mensaje-inv").hide();
    $('#btn-submit').click(function(){
        if(validar_datos()) {
            // Esto se hara asi mientras no exista un action/target real
            // a donde se va con el submit
            setTimeout(function(){ document.formulario.submit(); }, 3000);
        }   
    }); 
});

function validar_datos(){ 
    // Expresion regular para verificar que son solo letras
    var expLetras = /^[a-zA-Z]+$/;
    // Expresion regular para verificar que son solo numeros y que empieza por 9
    var expNumeros = /^9[0-9].*$/;
    // Variables para determinar si la validacion fue exitos o no
    var flagN = false;
    var flagE = false;
    var flagEm = false;
    var flagNum = false;
    var flagA = false;
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
        flagE = true;
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
        flagEm = true;
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
        flagNum = true;
    }

    // Validamos el asunto: no puede estar vacio y solo letras
    if(document.getElementById("asunto").value.length==0) {
        $("#asunto").addClass("is-invalid");
        $("#asunto-inv").hide();
        $("#asunto-vacio").show();
        document.getElementById("asunto").focus();
        return false;
    } else if (!document.getElementById("asunto").value.match(expLetras)) {
        $("#asunto").addClass("is-invalid");
        $('#asunto-vacio').hide();
        $("#asunto-inv").show();
        document.getElementById("asunto").focus();
        return false;
    } else {
        $("#asunto").removeClass("is-invalid");
        $("#asunto").addClass("is-valid");
        $('#asunto-vacio').hide();
        $("#asunto-inv").hide();
        flagA = true;
    }

    // Validamos el campo de texto: no puede estar vacio
    if(document.getElementById("mensaje").value.length==0) {
        $("#mensaje").addClass("is-invalid");
        $("#mensaje-vacio").show();
        document.getElementById("mensaje").focus();
        return false;
    } else if (!document.getElementById("mensaje").value.match(expLetras)) {
        $("#mensaje").addClass("is-invalid");
        $('#mensaje-vacio').hide();
        document.getElementById("mensaje").focus();
        return false;
    } else {
        $("#mensaje").removeClass("is-invalid");
        $("#mensaje").addClass("is-valid");
        $('#asunto-vacio').hide();
        flagA = true;
    }

    if(flagN == true && flagE == true && flagEm == true && flagNum == true && flagA == true) {
        flag = true;
        $('#myModal').modal('show');
        return flag;
    }
    
}