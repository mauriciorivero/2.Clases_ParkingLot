// Ejemplo de uso
import Vehiculo from './vehiculo.js';
import CeldaParqueo from './CeldaParqueo.js';
import HistorialParqueo from './HistorialParqueo.js';


console.log("=== Ejemplo de uso de las clases ===");
const vehiculo1 = new Vehiculo(1, "ABC-123", "Rojo", "Corolla", "Toyota", "Sedan");
console.log(vehiculo1.toString());

const celda1 = new CeldaParqueo(1, "Estándar", "Disponible");
console.log(celda1.toString());

// Crear un historial de parqueo
const historial1 = new HistorialParqueo(celda1, vehiculo1, "Ocupado");
console.log(historial1.toString());

// Modificar propiedades usando setters
vehiculo1.color = "Azul";
celda1.estado = "Ocupado";
historial1.estado = "Liberado";

console.log("\n=== Después de modificaciones ===");
console.log(vehiculo1.toString());
console.log(celda1.toString());
console.log(historial1.toString());

