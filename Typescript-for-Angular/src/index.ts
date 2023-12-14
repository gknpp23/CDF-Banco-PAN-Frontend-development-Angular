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

//  interfaces ( type X interface )
//  Type -> usado pra tipar um objeto
//  Interface é mais usado para trabalhar com classes. Similar a um contrato.
//  POdemos definir metodo, em ambos os casos.

type robot = {
    id: number; //propriedades aceitam multi-type, em ambos os casos
    readonly name: string; //propriedade apenas em modo de leitura ( não aceita novos valores ), aplicavél nos dois casos
}
 interface creator {
    id: number;
    name: string;
 }
const bot: robot = {
    id: 1,
    name: "Bender"
}
const scientist: creator = {
    id: 3,
    name: "Farnsworth"
}

// Classes
// Um forma, molde

/*
     Data modifiers - getters & setters, aplicados a atributos e métodos
     - public (padrão)
     - private 
     - protected

*/

class Character {
    name: string 
    private stregth: number     //atributo privado, acesso somente dentro da mesma classe
    protected skill: number     //atributo protegido de acessos externos, apenas classe e subclasse (herdadas) podem modificar o atributo
    maxScore?: number // atributo opcional (?)

    //Primeiro metodo, sempre.
    //é usado para "construir" a classe
    constructor(name: string, stregth: number,skill: number){ //parâmetros opcionais são sempre os últimos

        //o palavra-chave this,se refere ao escopo da classe
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;

    }

    private attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

// Subclasses - Herança
// Nesse exemplo: Character -> Superclass ou pai e Magician -> subclass ou filha

class Magician extends Character{
    magicPoints: number
    constructor(name: string, skill:number, stregth:number, magicPoints: number){

        super(name, stregth ,skill); //invoca o constructor da classe super ( ou pai )

        this.magicPoints = magicPoints
    }
        
}

// Generics
// Operador spread (...) tem o significado de diversos itens
// o <T> -> e uma definição genérica para o tipo, para substituir o uso do any e evitar inconsistências. -> Tipo dinâmico

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1.5],[3]) // Definimos o tipo como um array de number

// numArray.push("Saitama") // Erro, pois oconseguimos setar o tipo.

// Decorators --> Pesquisar mais sobre
// Experimental no TS, mas muito usado em frameworks -> Habilitar no tsconfig.json
// Decoramos o método e adicionamos o gatilho em pontos especificos do código.
// Ou seja, o método é executado em determinados locais quando for acionado o gatilho, após ocorrer a execução do trecho especificado.
//Usado para injetar código ou uma ação especifica, após outro trecho ser executado.
//O método é decorado mas não executado, a menos que tenha um gatilho para invocá-lo
//target e o alvo, sempre

function ExibirNome(target: any){
    console.log(target)
}

@ExibirNome    //Gatilho do método, será executado com o atributo que está abaixo
class Employee {}

// Outro exemplo

// Factory -> Função que retorna outra função

function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version });
    }
}

//@apiVersion("1.10.1") //injeta código ou um novo comportamento

// Attribute decorator
function minLength(length: number){
    return (target:any, key:string) => {
        let _value = target[key]

        const getter = () => _value;
        const setter = (value:string) => (value: string) => {
            if(value.length < length){
                throw new Error(`Nome muito curto!, precisa ter ao menos ${length} caracteres.`);
            }
            _value = value;
        }

        Object.defineProperty(target,key, {
            get: getter,
            set: setter,
        }) 
    };
}

class Api {
    @minLength(3) //adiciona um gatilho como um atributo da classe. Pra adicionar uma lógica adicional qual o valor name for setado.

    name: string;

    constructor(name:string){
        this.name = name
    }
}

const apiExample = new Api("Products");

console.log(apiExample.__version); // Injeção de propriedade de maneira dinâmica, geralmente usada por debaixo dos panos