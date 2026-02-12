//Una clase
var auto ={
    marca: 'Fiat',
    modelo: 'Yaris',
    annio: 2024,
    color: 'Rojo',
    velocidad: '120 km/h',

    cambiarColor: function(color){
        this.color = color;
        console.log(this);
        
    }
}

auto.cambiarColor('Azul');