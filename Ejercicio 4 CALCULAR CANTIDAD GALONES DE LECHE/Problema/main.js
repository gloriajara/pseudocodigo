/* Un productor de leche lleva el registro de lo que produce en litros, pero cuando va al mercado a vender 
su producción tiene que entregar galones. Por lo que necesita ayuda para saber cuanto va a ganar al final 
del día si toda su producción la debe transformar a galones.

Realice un algoritmo, y represéntelo mediante un diagrama de flujo y el pseudocódigo, que ayude al productor 
a saber cuánto galones va a poder vender al día. (1 galón= 3.785 litros).
*/

var litros;
var galon;
litros = prompt('Ingrese cantidad de litros', '');
galon = parseInt (litros/3785);
alert ('Son ' + galon + ' galones');
