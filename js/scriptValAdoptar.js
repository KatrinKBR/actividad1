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

function llenarComunas() {
    var region_comuna = {
        "regiones": [{
                "nombreRegion": "XV Arica y Parinacota",
                "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
            {
                "nombreRegion": "I Región de Tarapacá",
                "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
            {
                "nombreRegion": "II Región de Antofagasta",
                "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
            {
                "nombreRegion": "III Región de Atacama",
                "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
            {
                "nombreRegion": "IV Región de Coquimbo",
                "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
            {
                "nombreRegion": "V Región de Valparaíso",
                "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
            {
                "nombreRegion": "VI Región del Libertador Bernardo O'Higgins",
                "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
            {
                "nombreRegion": "VII Región del Maule",
                "comunas": ["Talca", "ConsVtución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
            {
                "nombreRegion": "VIII Región del Bío-Bío",
                "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
            {
                "nombreRegion": "IX Región de la Araucanía",
                "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
        },
            {
                "nombreRegion": "XIV Región de los Ríos",
                "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
            {
                "nombreRegion": "X Región de los Lagos",
                "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
            {
                "nombreRegion": "XI Región de Aysén",
                "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
            {
                "nombreRegion": "XII Región de Magallanes y Antártica Chilena",
                "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
            {
                "nombreRegion": "XVI Región de Ñuble",
                "comunas": ["Chillán","Bulnes","Chillán Viejo","El Carmen","Pemuco", "Pinto", "Quillón","San Ignacio", "Yungay", "San Carlos", "Coihueco",
                "Ñiquén", "San Fabián", "San Nicolás", "Quirihue", "Cobquecura","Coelemu","Ninhue","Portezuelo", "Ránquil","Treguaco"]
            
        },

            {
                "nombreRegion": "RM Región Metropolitana",
                "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
    }

    var regionSel = $("#region").val();
    var iR = 0;
    var iC = 0;
    var htmlComuna = '<option selected value="" disabled="disabled">Seleccione una comuna</option>';
    $.each(region_comuna.regiones, function() {
        // Si la region iR del objeto coincide con la del formulario
        if(region_comuna.regiones[iR].nombreRegion == regionSel) {
            // Se recorren las comunas de esa region y se van anadiendo
            $.each(region_comuna.regiones[iR].comunas, function() {
                htmlComuna = htmlComuna + '<option>'+region_comuna.regiones[iR].comunas[iC]+'</option>';
                iC++;
            });
        }
        iR++;
    });
    $('#comuna').html(htmlComuna);
}