console.log("Ejercicio 27");

let numero1 = 32;
let numero2 = 12;

console.log(`Suma = ${numero1 + numero2}`);
console.log(`Resta = ${numero1 - numero2}`);
console.log(`Multiplicación = ${numero1 * numero2}`);
console.log(`División = ${numero1 / numero2}`);
console.log(`Módulo = ${numero1 % numero2}`);

console.log("");
console.log("");
console.log("Ejercicio 28");


let numero = 9;
console.log(`Tabla del 9
9 x 1:  ${numero * 1}
9 x 2:  ${numero * 2}
9 x 3:  ${numero * 3}
9 x 4:  ${numero * 4}
9 x 5:  ${numero * 5}
9 x 6:  ${numero * 6}
9 x 7:  ${numero * 7}
9 x 9:  ${numero * 9}
9 x 10: ${numero * 10}`);

console.log("");
console.log("");
console.log("Ejercicio 29");


let lado = 10;
console.log(`El perímetro del cuadrado es: ${lado * 4}`);

console.log("");
console.log("");
console.log("Ejercicio 30");

lado = 5;
console.log(`El área del cuadrado es: ${lado * lado}`);

console.log("");
console.log("");
console.log("Ejercicio 31");

let lado1 = 10;
let lado2 = 20;
let lado3 = 5;
console.log(`El perímetro del triángulo es: ${lado1 + lado2 + lado3}`);

console.log("");
console.log("");
console.log("Ejercicio 32 - La figura es un triángulo y la base es igual a cada lado");


let altura = 10;
let base = 4;
console.log(`El perímetro es: ${base * 3}.
El área es ${base * altura}`);

console.log("");
console.log("");
console.log("Ejercicio 33");


let cantidadDePersonas = 100;
//cantidadDePersonas = cantidadDePersonas + 5; 
cantidadDePersonas += 5; 
console.log(`En este momento, la cantidad de personas es: ${cantidadDePersonas}`);
//cantidadDePersonas = cantidadDePersonas - 3;
cantidadDePersonas -= 3;
console.log(`Después de que tres personas se dieron de baja, la cantidad de personas es: ${cantidadDePersonas}`);
//cantidadDePersonas = cantidadDePersonas * 2;
cantidadDePersonas *=2; // igual a decir cantidadDePersonas += cantidadDePersonas
console.log(`Después de comprar la empresa y duplicar la cantidad de personas, la cantidad es: ${cantidadDePersonas}`);


console.log("");
console.log("");
console.log("Ejercicio 34");

let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;

ingresos >= 800 && console.log(`Ingresos generados ${ingresos}. Se cumplió el objetivo de generar al menos $800 de ingresos.`);
impuestos < 400 || console.log(`Impuestos pagados: ${impuestos}. No se cumplió el objetivo de gastar menos de $400 en impuestos.`);
ganancias = 600 && console.log(`Ganancias obtenidas: ${ganancias}. Corresponde pagar bono de ganancias.`);

console.log("");
console.log("");
console.log("Ejercicio 35");

let numeroDeCliente = 143245;
let numeroDeClienteIngresado = 143245;
numeroDeCliente === numeroDeClienteIngresado && console.log(`El número de cliente ingresado es correcto.`);
typeof numeroDeCliente === typeof numeroDeClienteIngresado && console.log(`El tipo de número de cliente ingresado es correcto.`);
//Falta comparación por tipo de datos. No sé cómo hacerla.

console.log("");
console.log("");
console.log("Ejercicio 36");

numero1 = 10;
numero2 = 20;
numero1 === numero2 && console.log(`Los números ingresados son iguales.`);
numero1 !== numero2 && console.log(`Los números ingresados son distintos.`);

console.log("");
console.log("");
console.log("Ejercicio 37");

let promedioParaAprobar = 6;
let promedioDelAlumno = 4;

promedioDelAlumno >= promedioParaAprobar && console.log(`El alumno tiene un promedio de (${promedioDelAlumno}) que es igual o mayor que el requerido (${promedioParaAprobar}).`);

promedioDelAlumno < promedioParaAprobar && console.log(`El alumno tiene un promedio de (${promedioDelAlumno}). Le faltaron ${promedioParaAprobar - promedioDelAlumno} para aprobar con (${promedioParaAprobar}).`);








