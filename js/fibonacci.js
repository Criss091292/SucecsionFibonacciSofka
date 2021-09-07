let n=0;
let arrayFibonacci=[];

n = leerN();
arrayFibonacci =calcularPrimerosNElementosFibonacci(n);
alert(mostrarSerie(arrayFibonacci)); 

function validarN(n){
    if (n>=0){
        return true;
    }else{
        return false;
    }
}

function leerN(){
    do {
        n = parseInt(prompt("ingrese el nro de elementos a mostrar ",10));
    }while(!validarN(n));
    return n;
} 

function calcularPrimerosNElementosFibonacci(n){
    alert(n);
    for(let i=0; i<n; i++){
        if(i===0){
            arrayFibonacci[i]=0;
        }else if(i===1 ){
            arrayFibonacci[i]=1;
        }else{
            arrayFibonacci[i]=arrayFibonacci[i-1]+arrayFibonacci[i-2];
        }
    }   
    return arrayFibonacci;
}
function mostrarSerie(arrayFibonacci){
    let mensaje = ""; 
    for(let i=0; i<arrayFibonacci.length; i++){
        mensaje= mensaje + "i: " + (i+1) +  "   " +arrayFibonacci[i] + ", ";
    }
    return mensaje;
 }