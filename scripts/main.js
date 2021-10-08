let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/jojo.jpg') { // Solo funciona con " / " entre direcciones
      miImage.setAttribute('src','images/jojo2.jpg');
    } else {
      miImage.setAttribute('src', 'images/jojo.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) { //Si no tiene valor se vueve a introducir
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Mozilla es genial,' + miNombre;
    }
}

/*
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido,' + nombreAlmacenado;
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}
*/
/*
const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola mundo!';
function multiplica(num1,num2) {
  let resultado = num1 * num2;
  return resultado;
}
//alert(multiplica(4, 7));
//alert(multiplica(20, 20));
//multiplica(0.5, 3);
document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
*/