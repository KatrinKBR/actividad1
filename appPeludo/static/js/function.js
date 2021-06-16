function validar_dato(){
    var alphaExp = /^[a-zA-Z]+$/;
    if (!alphaExp.test(document.getElementById("nombre").value)) {
        alert("El nombre no puede tener numeros");
        document.getElementById("nombre").focus();
        return false;
    }
    alert("Datos ingresados correctamente!");
    document.formulario.submit();

}