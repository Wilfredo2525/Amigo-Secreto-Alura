// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.

// 1. Crear array para almacenar los nombres de amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// 3. Funcion para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';
    
    // repetir sobre el array y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// 4. Funcion para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}

// 5. Funcionalidad adicional: permitir agregar con Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// 6. Funcionalidad adicional: limpiar resultado al agregar nuevos amigos
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Modificar la función agregarAmigo para limpiar resultado
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    
    // Limpiar resultado anterior y actualizar lista
    limpiarResultado();
    actualizarListaAmigos();
}