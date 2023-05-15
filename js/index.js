const cuerpo = document.querySelector("body");
const display = document.querySelector("p");
let cont = 0;

function cambio2(){
    let color = "#0298FF";
    cuerpo.style.background = color;
    mostrar(color);
}

function cambio0(){
    let color = "#FF0202"
    cuerpo.style.background = color;
    mostrar(color);
}

function cambio1(){
    let color = "#02FF47"; 
    cuerpo.style.background = color;
    mostrar(color);
}

function mostrar(color1){
    display.innerText = color1;
}


/* ============================================================================== */

/*
function coloresRandom(){
    
    let color1 = "#FF0202", color2 = "#0298FF", color3 = "#02FF47"
    
    cont++;
    if (cont == 1) {
        cuerpo.style.background = color1;
    } 
    if(cont == 2){
        cuerpo.style.background = color2;
    } 
    if(cont == 3){
        cuerpo.style.background = color3;
    } 
    if(cont >= 4){
        cont = 0;
    }
    
    //console.log(cont);
}
*/

/* ======================================================================== */


let arrayColors = ["#FF0202","#0298FF","#02FF47"];

function imprimirInformacion(){
    let resultado = Math.floor(Math.random() * arrayColors.length);
    
    let color = cuerpo.style.background = arrayColors[resultado];

    mostrar1(color);
} 

function mostrar1(color2){
    display.innerText = "Background: " + color2;
}

/* Imprimir codigo de manera dinamica, que diga background y codigo de color */


