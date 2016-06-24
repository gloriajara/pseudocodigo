/*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.Para cada pedido, 
tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros.

Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir 
con base en los metros que requiere.

Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).*/

var metros = prompt ('¿Cuántos metros de tela necesita?', 'metros');
var conversion = 0.0254;

var pulgadas = parseInt(metros/conversion);

alert('Corresponde en ' + pulgadas + ' pulgadas'); 