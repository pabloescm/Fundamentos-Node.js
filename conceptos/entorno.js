//VARIABLES DE ENTORNO
/*Para ingresar las variables con PowerShell primero hay que definirlas escribiendo:
    $env:NOMBRE="carlos"
    una vez definido ejecutamos el comando
    node conceptos/entorno.js
*/
let nombre = process.env.NOMBRE || 'SIN NOMBRE';
let web = process.env.WEB || 'NO TENGO WEB';

console.log('hola ' + nombre);
console.log('mi web es ' + web);

//las variables de entorno vienen en mayuscula y separdas con _ MI_WEB




