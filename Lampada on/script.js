var lamp=document.getElementById('lampOff')
var ligar=document.getElementById('ligar')
var desligar=document.getElementById('desligar')
var reparar=document.getElementById('reparar')

function ligarLamp (){
    lamp.src ="img/lampOn.png"
    document.body.style.backgroundColor = "#ecda38ff";
}
function desligarLamp (){
    lamp.src ="img/lampOff.png"
    reparar.style.display = "none";
    ligar.style.display = "block";
    desligar.style.display = "block";
    document.body.style.backgroundColor = "black";
}

function quebrarlamp(){
    lamp.src ="img/quebrada.png"
    reparar.style.display = "block";
    ligar.style.display = "none";
    desligar.style.display = "none";
    document.body.style.backgroundColor = "white";
    
}