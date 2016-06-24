/*Se requiere determinar el sueldo semanal de un trabajador con base en las horas que trabaja 
y el pago por hora que recibe.

Realice el diagrama de flujo y el pseudocódigo que representen el algoritmo de solución 
correspondiente*/

var horas = prompt('Ingrese número de horas', ''); 
var pago = prompt('Ingrese pago por hora', '');
var dias = prompt('Ingrese dias trabajados', '');

var sueldo = parseInt(horas*pago*dias);

alert('Su sueldo semanal es de ' +sueldo);