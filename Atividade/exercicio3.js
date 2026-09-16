const entrada = require('readline-sync')


const PcasPorCiclo = entrada.questionInt("Digite o número de peças por ciclo: ")

let acumulado = 0;

for (let ciclo = 1; ciclo <=10; ciclo++) {
  acumulado += PcasPorCiclo;
  console.log(`Ciclo ${ciclo} - Producao acumulada: ${acumulado}`)
};