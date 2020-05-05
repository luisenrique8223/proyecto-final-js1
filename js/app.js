
var display = document.getElementById('display');
var reset = document.getElementById('on');
var negativo = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var suma= document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');
var cero = document.getElementById('0');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var punto = document.getElementById('punto');
var igual= document.getElementById('igual');
var teclado=document.getElementsByClassName('tecla')
var aux2= parseFloat(display.innerHTML);

var aux=0;
var operacion="";

document.getElementById('1').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 1
display.innerHTML=display.innerHTML.substring(0,8);
})


document.getElementById('2').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 2
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('3').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 3
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('4').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 4
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('5').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 5
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('6').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 6
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('7').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 7
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('8').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 8
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('9').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 9
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('0').addEventListener('click', function(){
if(display.innerHTML=="0")
{display.innerHTML=''}
display.innerHTML += 0
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('punto').addEventListener('click', function(){
if(display.innerHTML.indexOf(".")=="-1"){
display.innerHTML += "."
}else{
display.innerHTML += ""
}
})


document.getElementById('sign').addEventListener('click', function(){
display.innerHTML *=-1
})

document.getElementById('mas').addEventListener('click', function(){
aux= parseFloat(display.innerHTML);
operacion="+";
display.innerHTML=display.innerHTML.substring(0,8);
limpiar()
})

document.getElementById('menos').addEventListener('click', function(){
aux= parseFloat(display.innerHTML);
operacion="-";
display.innerHTML=display.innerHTML.substring(0,8);
limpiar()
})

document.getElementById('por').addEventListener('click', function(){
aux= parseFloat(display.innerHTML);
operacion="*";
display.innerHTML=display.innerHTML.substring(0,8);
limpiar()
})

document.getElementById('dividido').addEventListener("click", function(){
  aux=parseFloat(display.innerHTML);
  operacion='/';
  display.innerHTML=display.innerHTML.substring(0,8);
  limpiar()
})


document.getElementById('igual').addEventListener('click', function(){
      if (operacion=="+") {
        display.innerHTML= parseFloat(display.innerHTML)+parseFloat(aux)
      }
      else if (operacion=="-") {
        display.innerHTML= parseFloat(aux)-parseFloat(display.innerHTML)
      }
      else if (operacion=="*") {
      display.innerHTML=  parseFloat(display.innerHTML)*parseFloat(aux)
        }
        else if (operacion=='/') {
        display.innerHTML=  parseFloat(aux)/parseFloat(display.innerHTML)
      }
display.innerHTML=display.innerHTML.substring(0,8)
})

document.getElementById('on').addEventListener('click', function(){
limpiar();
display.innerHTML="0"
})

function limpiar(){
  display.innerHTML="";
}
