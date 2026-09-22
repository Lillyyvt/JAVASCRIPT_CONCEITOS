// • Solicitar o peso de uma peca.
// • Menos de 95 g: REPROVADA - ABAIXO DO PESO.
// • De 95 g a 105 g, inclusive: APROVADA.
// • Acima de 105 g: REPROVADA - ACIMA DO PESO.
// • Exibir o peso e a classificacao. 

const entrada = require('readline-sync')

const peso = entrada.questionFloat("Digite o peso da peça (em g):");
 
let classificação;

if (peso <95) {
   classificação = "REPROVADA | ABAIXO DO PESO";} 
   
   else if  (peso <= 95,105){
   classificação = "APROVADA";}
 else { classificação = "REPROVADA | ACIMA DO PESO";
};
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
console.log(`Peso: ${peso}g`);
console.log(`Classificação: ${classificação}`)
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")