/*La compañía de autobuses “La curva loca” requiere determinar el costo que tendrá el boleto 
de un viaje sencillo, esto basado en los kilómetros por recorrer y en el costo por kilómetro.
Realice un diagrama deflujo y pseudocódigo que representen el algoritmo para tal fin*/

var costoxkm = prompt('¿Cuánto es el costo por kilómetro?');
var km = prompt('¿Cuánto kilómetros recorrera?');

var boleto = parseInt(costoxkm*km);
alert('El costo por boleto es de ' +boleto);