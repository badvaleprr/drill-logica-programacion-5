// Generar número secreto aleatorio del 1 al 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Arreglo para almacenar los intentos del usuario
const intentos = [];

let adivinado = false;

while (!adivinado) {
    let input = prompt("Adivina el número secreto (entre 1 y 100):");

    // Convertir a número
    let numero = Number(input);

    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero) || numero < 1 || numero > 100) {
        console.log("⚠️ Error: Ingresa un número válido entre 1 y 100.");
        continue;
    }

    // Guardar el intento
    intentos.push(numero);

    // Verificar si adivinó
    if (numero === numeroSecreto) {
        console.log("🎉 Felicidades, adivinaste el número secreto.");
        console.log("📋 Números ingresados antes de acertar:", intentos);
        adivinado = true;
    } else {
        console.log("❌ Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}
