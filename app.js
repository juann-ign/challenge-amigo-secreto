// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");


function agregarAmigo() {
    /*
    if (inputAmigo.value === "") {
        alert ('Debes ingresar un nombre.');
        return;
    }
    */
    if (!inputAmigo.value) {
        alert ('Debes ingresar un nombre.');
        return;
    }

    const amigo = inputAmigo.value;
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    // ulListaAmigos.innerHTML += "<li>" + amigo + "</li>";
    ulListaAmigos.innerHTML += `<li> ${amigo} </li>`;
    /*
    const amigo = inputAmigo.value;
    listaAmigos.push(amigo);
    inputAmigo.value = ""; 
    */
}


function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Deben haber al menos 2 amigos para sortear.');
        return;
    }
    else{
        const random = Math.floor(Math.random() * listaAmigos.length);
        const amigoSecreto = listaAmigos[random];
        console.log(`El amigo secreto es ${amigoSecreto}`);
        ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto} </li>`;
        return;
    }    
}


