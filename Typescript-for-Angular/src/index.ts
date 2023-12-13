var mensagem:string = "Hello World - TS";

console.log(mensagem);


// Variáveis
/** Tipos primitivos: boolean, number, string
 * 
 * null - undefined
 * 
 * any  - void
 */

//Exemplos - Primitivos
let turnOn:boolean = true;
let steps:number = 5;
let energyValue:number = 2.9;
let nameUser:string = "Gabriel Knupp"

//Exemplos - Especiais
//Usados em lógicas especificas.

let nullForever: null = null;                  // aceita apenas o valor null
let undefinedForever: undefined = undefined;  // aceita apenas o valor undefined

// Exewmplos - Abrangentes
let anyType:any = '';       //Aceita qualquer tipo, usado quando não temos previsão do tipo de um retorno.

let voidReturn:void;        // Tipo vazio, usado pra quando uma expressão / função não há nenhum retorno

// Objects - Sem previsibilidade
let product: object = {
    name: "Teclado mecânico",
    price: "R$599,98"
}; // Aceita qualquer objeto, sem limitação de atributos - NÃO é uma boa prática

// Object type (Struct) - Maior previsibilidade, formata o objeto
type ProductStore = {
    name: string;
    price: number;
    unit: number;
}
// Maior previsibilidade, define os valores que devem ser informados
let myProduct: ProductStore = {
    name: "Mouse Gamer",
    price: 79.99,
    unit: 20
}

// Arrays ou Vetor
let customerNames: string[] = ["Gabriel","Lidiane","Olaf"] // Vetor de valores strings
let customerLastNames: Array<string> = ["Knupp","Beatriz","Neves"];  // declaração usando uma interface

//Arrays multi-types
let orders: ( string | number)[] = ["Gabriel",30];

// Tupla -> Vetor multi-type com ordem definida
let payment: [string,number,boolean] = ["conta de luz",150,true]

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

let birthday: Date = new Date("2022-12-01 05:00");  // padrão americano
console.log(birthday.toString())


// Functions
// Muito similar ao JS, porém podemos tipar os parâmetos e também o seu retorno.
// O retorno pode ser atribuido de maneira implicita, com base no tipo dos parâmetros
function addNumber(x:number, y:number): number{
    return x + y;
}

let sumNumbers: number = addNumber(4,7); // variável deve ser do mesmo tipo do retorno.

// Fuctions multi-types
function calltoPhone(phone: number | string){ // tipos separados por pipe
    return phone;
}

// Async function


async function getData(id: number): Promise<string> {
    return "Gabriel"
}