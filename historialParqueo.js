class HistorialParqueo {
    
    // Propiedades privadas
    _celda;
    _vehiculo;
    _estado;
    _fechaHora;


    // Constructor
    constructor(celda, vehiculo, estado) {
        this._celda = celda;
        this._vehiculo = vehiculo;
        this._estado = estado;
        this._fechaHora = new Date(); // Agregado para registrar cuándo se crea el historial
    }

    // Getters
    get celda() {
        return this._celda;
    }

    get vehiculo() {
        return this._vehiculo;
    }

    get estado() {
        return this._estado;
    }

    get fechaHora() {
        return this._fechaHora;
    }

    // Setters
    set celda(celda) {
        this._celda = value;
    }

    set vehiculo(vehiculo) {
        this._vehiculo = value;
    }

    set estado(value) {
        this._estado = value;
    }

    set fechaHora(value) {
        this._fechaHora = value;
    }

    // Método toString para representación en cadena
    toString() {
        return `HistorialParqueo{celda: ${this._celda}, vehiculo: ${this._vehiculo}, estado: ${this._estado}, fechaHora: ${this._fechaHora}}`;
    }
}

export default HistorialParqueo;