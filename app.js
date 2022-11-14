let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
let n2=parseFloat(document.getElementById('n2').value);
const entrada=200
let s=n2*entrada;
respuesta.innerHTML=s
}

