const entrada = require('readline-sync');


let total = 0; // acumulador iniciado em 0.

for (let inspecao = 1; inspecao <=6; inspecao++){
    const valor = entrada.questionInt(`Digite a medida da $(inspecao):`);
    total += valor // soma mas mantem o que já tinha
}
const media = total / 6;


 console.log(`Total de defeitos: ${total}`);
  console.log(`Total de defeitos: ${media.toFixed(2)}`);