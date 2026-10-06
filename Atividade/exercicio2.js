// Uma máquina deve ser classificada e acordo com a temperatura ate 50 C = NORMAL; de 52 C até 89 = ATENÇÃO; acima de 89 C = CRITÍCA.   

const entrada = require('readline-sync')

const temperatura = entrada.questionInt("Digite a temperatura em °C: ");

let situacao;

if (temperatura <=60) {
   situacao = "NORMAL";
} else if  (temperatura<=80){
   situacao = "ATENÇÃO";
} else {
  situacao = "CRÍTICO";
};

console.log(`Temperatura: ${temperatura}°C`);
console.log(`Situação: ${situacao}`)
