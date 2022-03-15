// Dado el array = [1,2,3,4,5,6]
//Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla. 

var num = [1, 2, 3, 4, 5, 6] 
num = [];
while (num <= 7){
	console.log([num]);
  num++
}


//Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.

var arr= [1, 2, 3, 4, 5, 6] 
var n 
for (n=0; n<=arr.length; n++){ 
      console.log(n) 
}

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno

var arr= [1, 2, 3, 4, 5, 6]; 
var n; 
for (n=0; n<arr.length; n++){
      console.log(arr[n]+1) 
} 

//Generar una copia de un array pero con todos los elementos incrementado en 12.

var arrt = arr; 
var n; 
for (n=0; n<arr.length; n++){ 
      console.log(arr[n]+12) 
} 

//Calcular el promedio de la copia


// Dado un número ingresado por el usuario, crear la serie de Fibonacci. Ej: si se ingresa 7, se debe mostrar 1 1 2 3 5 8 13

var nu = parseInt(prompt ('ingrese el primer numero'));
var no = parseInt(prompt ('ingrese el primer segundo'));

var arr = [nu + no];

for (var i = 0; i <= 10; i++){
  var ne = nu + no;
  arr.push(ne);
  nu = no;
  no = ne;
}
console.log(arr)

// El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado

var nn = prompt('ingres')
var n; 
for (n = 1; n <= nn; n= n+2){
	var res = '';
		for (var r = 1; r <= n; r++) {
  		    res += '* ';
  	}
    for (var x = 0; x < n*2-1; x++){
        res += '* '
    }
}
console.log(res)