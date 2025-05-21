# Sistema de Gestión de Parqueo

Este proyecto es un sistema básico de gestión de parqueo implementado en JavaScript, que modela vehículos, celdas de parqueo e historial de uso de las celdas.

## Estructura del Proyecto

- `vehiculo.js`: Define la clase `Vehiculo`.
- `CeldaParqueo.js`: Define la clase `CeldaParqueo`.
- `HistorialParqueo.js`: Define la clase `HistorialParqueo`.
- `main.js`: Ejemplo de uso de las clases.
- `index.html`: Archivo HTML para ejecutar el proyecto en navegador.
- `packacge.json`: Configuración del proyecto.

---

## Clases

### Vehiculo

Representa un vehículo que puede ocupar una celda de parqueo.

**Atributos:**
- `_id`: Identificador único del vehículo.
- `_placa`: Placa del vehículo.
- `_color`: Color del vehículo.
- `_modelo`: Modelo del vehículo.
- `_marca`: Marca del vehículo.
- `_tipo`: Tipo de vehículo (por ejemplo, Sedan, SUV, etc).

**Métodos:**
- `constructor(id, placa, color, modelo, marca, tipo)`: Inicializa un nuevo vehículo.
- Getters y Setters para cada atributo.
- `toString()`: Devuelve una representación en cadena del vehículo.

---

### CeldaParqueo

Representa una celda dentro del parqueadero.

**Atributos:**
- `_id`: Identificador único de la celda.
- `_tipo`: Tipo de celda (por ejemplo, Estándar, Discapacitados, etc).
- `_estado`: Estado de la celda (por ejemplo, Disponible, Ocupado).

**Métodos:**
- `constructor(id, tipo, estado)`: Inicializa una nueva celda de parqueo.
- Getters y Setters para cada atributo.
- `toString()`: Devuelve una representación en cadena de la celda.

---

### HistorialParqueo

Registra el historial de ocupación de una celda por un vehículo.

**Atributos:**
- `_celda`: Instancia de `CeldaParqueo` asociada.
- `_vehiculo`: Instancia de `Vehiculo` asociada.
- `_estado`: Estado de la celda en ese momento (por ejemplo, Ocupado, Liberado).
- `_fechaHora`: Fecha y hora del registro.

**Métodos:**
- `constructor(celda, vehiculo, estado)`: Inicializa un nuevo registro de historial.
- Getters y Setters para cada atributo.
- `toString()`: Devuelve una representación en cadena del historial.

---

## Ejecución

Para ejecutar el proyecto:

```sh
npm install
npm run start
```

O abre `index.html` en tu navegador.

---

## Ejemplo de Uso

El archivo [`main.js`](main.js) muestra cómo crear instancias de las clases y modificar sus atributos.

---

## Licencia

MIT