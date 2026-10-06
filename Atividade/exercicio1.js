// Uma fabrica deseja calcular sua produção diaria. O progrma deve solicitar o nome do produto, a quantidade produzida por hora e a quantidade de horas trabalhadas. Ao, final, deve calcular e exebir a produção total.

const entrada = require('readline-sync')

const Produto = entrada.question("Digite o produto: ");
const QtdProduto = entrada.questionInt("Digite a quantidade produzida por hora: ");
const HrsTrabalhadas = entrada.questionInt("Digite as horas trabalhadas: ");

const Total = QtdProduto * HrsTrabalhadas

console.log(`\n -=-=-=-=-=-Relatório de Produção-=-=-=-=-=-`);
console.log(`Produto: ${Produto}`);
console.log(`Producao por hora: ${QtdProduto}`);
console.log(`Horas trabalhadas: ${HrsTrabalhadas}`);
console.log(`Total: ${Total}`)
console.log(`\n -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-`);
// throw err: erro do node;