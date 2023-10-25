function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇¨
let vocales = "aeiouAEIOU"
let cont=0
for (let i = 0; i < phrase.length; i++) {
    if (vocales.indexOf(phrase[i]) != -1) cont++    
}
//console.log(phrase)
return cont
}
//cantidadDeVocales("hola")

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
//if (num1 % num2 == 0

while (divisor <=dividendo) {
    if (dividendo % divisor ==0) return divisor       
    divisor++;
}

}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
let nro = 0;
//console.log(nro)
while (nro <=100) {
    nro++
    console.log(nro)
        if (nro ==x) return "El numero X es: "+ nro    
}//while (nro ==x)   
}

//encuentraX(5);

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma =0
for (let i = 0; i < num; i++) {
    suma = suma+num
    
}
console.log(suma)
return suma
}
sumandoTodo(4)

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇

}

function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇

}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇

}

function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

}
  
module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}