/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
*/
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Selecciona un numero del 1 al 10';
*/
let numeroDeIntentos = 0;
let numerSecreto = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;
condicionesIniciales();

function condicionesIniciales(){
    asiganarTextoElemento('h1', 'Juego del numero secreto');
    asiganarTextoElemento('p', `Selecciona un numero del 1 al ${numeroMaximo}`); 
    numeroDeIntentos = 1;
    numerSecreto = generarNumeroSecreto();
    return;
}

function generarNumeroSecreto(){
    let numerSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros cerramos el codigo
    if(listaNumerosSorteados.length == numeroMaximo){
        //asiganarTextoElemento('p', 'Ya se asignaron todos los numeros posibles');
        //Si el arreglo de repetidos ya esta llenos, se lo vacio y luego se le agreaga de nuevo otro numero, pero ya reiniciado el mismo
        listaNumerosSorteados = [];
        listaNumerosSorteados.push(numerSecreto);
        return numerSecreto;
    }else{
        //
        if(listaNumerosSorteados.includes(numerSecreto)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numerSecreto);
            return numerSecreto;
        }
    }
}

function asiganarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroIngresadoUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if(numerSecreto === numeroIngresadoUsuario){
        asiganarTextoElemento('p', `Felicidades acertaste el numero en ${numeroDeIntentos} ${numeroDeIntentos === 1? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); /*removeAttribute me permite eliminar un atributo del html */
    }else{ 
        if(numerSecreto > numeroIngresadoUsuario){
            asiganarTextoElemento('p', 'el numero secreto es mayor');
        }else{
            asiganarTextoElemento('p', 'el numero es menor');
        }
        numeroDeIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorDeUsuario').value = '';
    return;
}


function reiniciarJuego(){
    //Primero limpiamos la caja
    limpiarCaja();
    //inicializar el numero de intentos
    //indicar mensaje de inicio
    //Generar numero aleatorio
    condicionesIniciales();
    //Deshabilitar el boton
    //document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


