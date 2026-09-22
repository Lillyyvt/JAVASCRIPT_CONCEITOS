// Criar um array vazio.
// Usar um laço para cadastrar 4 materiais.
// Criar um objeto em cada repetição com nome, quantidade e estoqueMinimo.
// Adicionar cada objeto ao array com push().
// Depois do cadastro, percorrer o array.
// Se quantidade < estoqueMinimo, exibir REPOR ESTOQUE; caso contrário, ESTOQUE OK.
// Exibir nome, quantidade, estoque mínimo e situação.

const entrada = require('readline-sync');

const materiais = [];
 for (let i = 0; i < 4; i++){
const material = {
    nome: entrada.question(`Digite o nome do ${i+1} material:`),
    quantidade: entrada.questionInt("Digite a quantidade:"),
    estoqueMinimo: entrada.questionInt("Digite o estoque mínimo:")
}
materiais.push(material);
}
 console.log("---------=RELATÓRIO==DE==ESTOQUE=---------")

for (let i = 0; i< materiais.length; i++){
const material = materiais[i];

let situacao;
if (material.quantidade < materiais.estoqueMinimo){
    situacao = "ESTOQUE BAIXO";
}else{
    situacao = "ESTOQUE OK";
};
console.log(`Material: ${material.nome}`);
console.log(`Quantidade: ${material.quantidade}`);
console.log(`Estoque Minimo: ${material.estoqueMinimo}`);
console.log(`Situacao: ${situacao}`);
console.log("-".repeat(20));
}