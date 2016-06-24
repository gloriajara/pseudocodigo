/*Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. 
Considere que se cobra por m2 y realice un diagramade flujo y pseudocódigo que representen 
el algoritmo que le permita ir generando presupuestos para cada cliente.*/

var m2 = prompt('¿Cuántos metros necesita?', 'metros');
var monto = prompt('Ingrese el valor', '');
var presupuesto = parseInt(m2*monto);
alert('El presupuesto es '+ '' + presupuesto);