"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Functions
// Muito similar ao JS, porém podemos tipar os parâmetos e também o seu retorno.
// O retorno pode ser atribuido de maneira implicita, com base no tipo dos parâmetros
function addNumber(x, y) {
    return x + y;
}
let sumNumbers = addNumber(4, 7); // variável deve ser do mesmo tipo do retorno.
// Fuctions multi-types
function calltoPhone(phone) {
    return phone;
}
// Async function
function getData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Gabriel";
    });
}
const bot = {
    id: 1,
    name: "Bender"
};
const scientist = {
    id: 3,
    name: "Farnsworth"
};
