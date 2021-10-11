/*
Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en un parque de diversiones
Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más
 */

let btnEnv = document.getElementById("btnEnviar");
let altura = document.getElementById("altura");
const max: number = 130;

btnEnv.addEventListener("click", () => {
  let alt: number = Number(altura.value);

  if (alt > max) {
    console.log("No sube");
  } else {
    console.log("Sube");
  }
});
