console.log('Hola mundo');//Mono Hilo

/*Algo que siga para siempre para esto vamos usar setInterval que recibe dos 
argumentos el primero es una funcion que es la funcion que va ejecutar
cada x tiempo y el segunto parametro que recibe es cada cuanto va ejecutar
lo que haya en la funcion en milisegundos.

*/

setInterval(function(){
    console.log("Hola");
},1000);

console.log('Segunda instruccion');
console.log('Tercera instruccion');
console.log('Cuarta instruccion');
console.log('Quinta instruccion');
console.log('Sexta instruccion');
console.log('Septima instruccion');
console.log('Octava instruccion');

//aunque debajo de de la funcion set interval tengo otros console.log la ejecucion no queda  en ese bucle infinito sino que
//ejecuta las demas intrucciones y sigue ejecutando el hola infinito cada segunto de la funcion setInterval.