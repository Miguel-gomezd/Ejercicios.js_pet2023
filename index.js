alert("Este programa sumara los numero que usted inserte y le mostrara el resultado por pantalla");

const sumarNumero = ()=>{

     do{
     let numero = window.prompt('inserte un numero')

     if (!Number.isNaN(Number(numero))){
        return parseInt(numero);
     }
     }while(true);

}



window.onload = function(){
    let num1 = sumarNumero();
    let num2 = sumarNumero();

    let suma = num1 + num2;

    document.getElementById("resultado", "la suma es").innerText = suma;
}