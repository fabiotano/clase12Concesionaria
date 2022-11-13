const autosImportados = require("./autos.js");
let cliente = require("./cliente.js");

const concesionaria = {

    autos : autosImportados,

    buscarAuto: function(matricula) {
        let auto = this.autos.find(auto => auto.patente === matricula);
        return auto == undefined ? null : auto;
    },

    venderAuto: function(matricula) {
        let auto = this.buscarAuto(matricula);
        return auto != undefined ? auto.vendido = true : "Patente no encontrada";
    },

    autosParaLaVenta: function() {
        let autosNoVendidos = this.autos.filter(auto => auto.vendido == false);
        return autosNoVendidos;
    },

    autosNuevos: function() {
        let auto = this.autosParaLaVenta().filter(auto => auto.km < 100);
        return auto;
    },

    listaDeVentas: function() {
        let autosVendidos = this.autos.filter(auto => auto.vendido == true);
        let precioAutos = autosVendidos.map(auto => auto.precio);
        return precioAutos;
    },

    totalDeVentas: function() {
        let total = this.listaDeVentas().reduce( (acc, precio) => acc + precio, 0);
        return total;
    },

    // cliente : {
    //     nombre: "Juan",
    //     capacidadDePagoEnCuotas: 20000,
    //     capacidadDePagoTotal: 100000}

    puedeComprar: function(auto, persona) {
        let costoCuota = auto.precio / auto.cuotas
        if (auto.precio < persona.capacidadDePagoTotal && costoCuota < persona.capacidadDePagoEnCuotas) {
            return true
        }
        else {
            return false
        }
    },
    
    autosQuePuedeComprar: function (persona) {
        let autosEnVenta = this.autosParaLaVenta()
        let puedeComprar = autosEnVenta.filter( arrayCoche => this.puedeComprar(arrayCoche, persona) == true);
        return puedeComprar
    }
}

//console.log(concesionaria.buscarAuto("JJK116"))
//console.log(concesionaria.venderAuto("JJK116"))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
//console.log(concesionaria.puedeComprar( autosImportados[2], cliente))
//console.log(concesionaria.autosQuePuedeComprar(cliente))
