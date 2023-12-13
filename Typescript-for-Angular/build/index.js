"use strict";
var mensagem = "Hello World - TS";
console.log(mensagem);
// Variáveis
/** Tipos primitivos: boolean, number, string
 *
 * null - undefined
 *
 * any  - void
 */
//Exemplos - Primitivos
let turnOn = true;
let steps = 5;
let energyValue = 2.9;
let nameUser = "Gabriel Knupp";
//Exemplos - Especiais
//Usados em lógicas especificas.
let nullForever = null; // aceita apenas o valor null
let undefinedForever = undefined; // aceita apenas o valor undefined
// Exewmplos - Abrangentes
let anyType = ''; //Aceita qualquer tipo, usado quando não temos previsão do tipo de um retorno.
let voidReturn; // Tipo vazio, usado pra quando uma expressão / função não há nenhum retorno
// Objects - Sem previsibilidade
let product = {
    name: "Teclado mecânico",
    price: "R$599,98"
}; // Aceita qualquer objeto, sem limitação de atributos - NÃO é uma boa prática
// Maior previsibilidade, define os valores que devem ser informados
let myProduct = {
    name: "Mouse Gamer",
    price: 79.99,
    unit: 20
};
// Arrays ou Vetor
let customerNames = ["Gabriel", "Lidiane", "Olaf"]; // Vetor de valores strings
let customerLastNames = ["Knupp", "Beatriz", "Neves"]; // declaração usando uma interface
//Arrays multi-types
let orders = ["Gabriel", 30];
// Tupla -> Vetor multi-type com ordem definida
let payment = ["conta de luz", 150, true];
// Metodos para trabalhar com arrays -> os mesmos do JS
/** revisar sobre:
 * map
 * filter
 * reduce
 * pop
 * push
 * remove
 */
// Dates
//Interface para trabalhar com datas
let birthday = new Date("2022-12-01 05:00"); // padrão americano
console.log(birthday.toString());
