/*Se requiere un algoritmo para determinar el costo que tendrá realizar una llamada telefónica 
con base en el tiempo que dura la llamada y en el costo por minuto.
Represente la solución mediante el diagrama de flujo y pseudocódigo.*/

var costoxmin = prompt('¿Cuánto es el costo por minuto?');
var minutos = prompt('¿Cuánto minutos llamo?');

var llamada = parseInt(costoxmin*minutos);
alert('El costo por llamada es ' +llamada);