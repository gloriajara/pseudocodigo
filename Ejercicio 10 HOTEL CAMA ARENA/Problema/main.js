/*El hotel “Cama Arena” requiere determinar lo que le debe cobrar a un huésped por su estancia 
en una de sus habitaciones.

Realice un diagrama de flujo y pseudocódigo que representen el algoritmo para determinar ese cobro.*/

var Testadia = prompt('¿Tiempo de estadia?');
var costo = prompt('¿Cual es el costo?');

var cobroporhuesped = parseInt(Testadia*costo);
alert('El costo por huesped es ' +cobroporhuesped);