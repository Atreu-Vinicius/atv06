let frase = "Me dê uma nota alta nessa atividade";

for (let i = 0; i < frase.length; i++) {
    console.log(frase[i]);
}

let contador = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        contador++;
    }
}
console.log("A letra 'w' aparece", contador, "vezes.");

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}
