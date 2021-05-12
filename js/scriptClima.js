$(document).ready(function () {
    $('#infoClima').hide();
    geolocalizacion();
});

function geolocalizacion() {
    if (!navigator.geolocation) {
        alert("Geolocalizacion no soportada en tu navegador.");
        return;
    }

    function exito(position) {
        var coord = {
            "lat" : position.coords.latitude,
            "lon" : position.coords.longitude
        }

        console.log(coord.lat, coord.lon);
        cargar_clima(coord);
    };

    function error() {
        alert("No pudimos obtener tu ubicación.");
        $('#calculando').hide();
        $('#infoClima').show();
        $('#infoClima').html("<p>No pudimos obtener tu ubicación.</p>")
    };

    navigator.geolocation.getCurrentPosition(exito, error);
}

function cargar_clima(coord) {
    var clima = new XMLHttpRequest();

    // clima.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=-33.4569&lon=-70.6483&appid=8fefcdc4f65e87fdd7c08f9e34215dc5&units=metric&lang=es', false);
    clima.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=' + coord.lat + '&lon=' + coord.lon + '&appid=8fefcdc4f65e87fdd7c08f9e34215dc5&units=metric&lang=es', false);
    clima.send(null);

    var datos = JSON.parse(clima.response);
    var ciudad = datos.name;
    var temperatura = datos.main.temp;
    var tiempo = datos.weather[0].description;
    var humedad = datos.main.humidity;

    $('#calculando').hide();
    $('#infoClima').show();
    $('#ubicacion').html(ciudad);
    $('#temperatura').html(temperatura);
    $('#tiempo').html(tiempo);
    $('#humedad').html(humedad);
}