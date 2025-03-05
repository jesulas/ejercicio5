import "./style.css";

console.log("Hello from main");
let CartaRobar = 1;
let baraja = [4,4,4,4,4,4,4,4,4,4];
let puntuacion = 0;
let NumeroPuntos = document.getElementById("puntos");
let plantado = false;
let reset = document.getElementById('resetear');
const goal = 7.5;
console.log(CartaRobar);

function generarCarta(){
if (plantado == true){
return
}
CartaRobar = Math.floor(Math.random()*10)
console.log(CartaRobar);
//Evita robar mas de 4 veces la misma carta
if ((baraja[CartaRobar]<1)){
generarCarta();
return;
} else {
baraja[CartaRobar]--;
console.log(baraja);    
}
var img = document.createElement("img");
    img.id = "espalda";
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
}
// ---------------------------------------------------------//
//  Partir esto entre 2 funciones para usar la boca abajo   //
// ---------------------------------------------------------//
function revelarCarta(){
    if (plantado == true){
        return
    }
    var img = document.getElementById("espalda");
    img.parentNode.removeChild(espalda);
switch(CartaRobar){
case 0:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion++;
    break;
case 1:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 2;
    break;
case 2:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 3;
    break;
case 3:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 4;
    break;
case 4:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 5;
    break;
case 5:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 6;
    break;
case 6:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 7;
    break;
case 7:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 0.5;
    break;
case 8:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 0.5;
    break;
case 9:
    var img = document.createElement("img"); 
    img.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"; 
    var src = document.getElementById("x"); 
    src.appendChild(img);
    puntuacion = puntuacion + 0.5;
    break;
}
NumeroPuntos.textContent = (puntuacion)
if (puntuacion > goal){
 alert("Ha pasado el limite, ha perdido el juego.");
 plantado = true;
 reset.style.display = 'block';
}
}

function plantar(){
console.log(puntuacion);
plantado = true;
reset.style.display = 'block';
if (puntuacion < 4){
alert("Has sido muy conservador");
} 
else if ((puntuacion >= 4) && (puntuacion <= 5)) {
alert("Te ha entrado el canguelo eh?");
}
else if ((puntuacion >5) && (puntuacion < 7.5)){
alert("Casi casi...")   
}
else if ((puntuacion == 7.5)){
alert("¡Lo has clavado!¡Enhorabuena!")
}
else if (puntuacion > 7.5){
alert("Se ha pasado de el limite.")
}
}

function reinciar(){
    let e = document.getElementById("x");
        e.innerHTML = "";
    baraja = [4,4,4,4,4,4,4,4,4,4];
    puntuacion = 0;
        NumeroPuntos.textContent = (puntuacion)
    plantado = false;
    reset.style.display = "none";
}
document.getElementById("robar").addEventListener("click", generarCarta);
document.getElementById("revelar").addEventListener("click", revelarCarta);
document.getElementById("plantar").addEventListener("click", plantar);
document.getElementById("resetear").addEventListener("click",reinciar);


