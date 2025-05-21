// Clase Vehiculo
class Vehiculo {

    // Atributos privados
    _id;
    _placa;
    _color;
    _modelo;
    _marca;
    _tipo;
    
    // Constructor
    constructor(id, placa, color, modelo, marca, tipo) {
        this._id = id;
        this._placa = placa;
        this._color = color;
        this._modelo = modelo;
        this._marca = marca;
        this._tipo = tipo;
    }

    // Getters
    get id() {
        return this._id;
    }

    get placa() {
        return this._placa;
    }

    get color() {
        return this._color;
    }

    get modelo() {
        return this._modelo;
    }

    get marca() {
        return this._marca;
    }

    get tipo() {
        return this._tipo;
    }

    // Setters
    set id(value) {
        this._id = value;
    }

    set placa(value) {
        this._placa = value;
    }

    set color(value) {
        this._color = value;
    }

    set modelo(value) {
        this._modelo = value;
    }

    set marca(value) {
        this._marca = value;
    }

    set tipo(value) {
        this._tipo = value;
    }

    // Método toString para representación en cadena
    toString() {
        return `Vehiculo{id: ${this._id}, placa: ${this._placa}, color: ${this._color}, modelo: ${this._modelo}, marca: ${this._marca}, tipo: ${this._tipo}}`;
    }
}

export default Vehiculo;