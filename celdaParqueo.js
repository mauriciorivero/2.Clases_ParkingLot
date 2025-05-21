class CeldaParqueo {
    constructor(id, tipo, estado) {
        this._id = id;
        this._tipo = tipo;
        this._estado = estado;
    }

    // Getters
    get id() {
        return this._id;
    }

    get tipo() {
        return this._tipo;
    }

    get estado() {
        return this._estado;
    }

    // Setters
    set id(value) {
        this._id = value;
    }

    set tipo(value) {
        this._tipo = value;
    }

    set estado(value) {
        this._estado = value;
    }

    // Método toString para representación en cadena
    toString() {
        return `CeldaParqueo{id: ${this._id}, tipo: ${this._tipo}, estado: ${this._estado}}`;
    }
}

export default CeldaParqueo;