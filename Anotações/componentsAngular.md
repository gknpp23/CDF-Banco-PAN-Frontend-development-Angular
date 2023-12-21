# Componentes no Angular
Componente ou component é um elemento visual, reutilizável e customizável. É um átomo da sua aplicação (pense neles como peças de lego), geralmente é uma função JS/TS, que retorna HTML, CSS e eventos JS.

## Como a aplicação é montada?
A composição dos componentes é montada através da injeção de dependência. Tá beleza, mas o que é essa tal injeção de dependência ?

A injeção de dependência é um padrão de desenvolvimento utilizado em diversos cenários distintos, a injeção ocorre quando algo depende de outro fator para seu funcionamento, mas ele não produz diretamente esse fator.
Ou seja, possuindo a dependência de um fator externo.

Components são injetados no component root ou App-root ( Component Lógico, sem função visual ). E o component Root é injetado no Index.html

Para conhecer a base do framework, ou seja, a estrutura minima necessária para executar, usaremos o site Stackblitz.

[Site para testar frameworks](https://stackblitz.com)

## Estrutura de pastas no Angular
* Arquivos /src in -> Codificação.
   - Ex: index.html, Styles (CSS, Less, Sass), main.ts ( inicialização do angular ), pollyfills.ts ( opcional )
* Arquivos /src out -> Configuração.
   - Ex: tsconfig.json, package.json, depedências do Angular ( angular.json )
* Arquivos de componentes angular são nomeados da seguinte forma: nomeComponente.component.[html | css | ts]
   - Ex: Card.component.ts

### Entendendo o Scoped

O Style aplicado a um component é a nível de escopo, ou seja, só é aplicado no component que está inserido no mesmo escopo.


## Estrutura de um component

1. importação do angular core ( Interface )
 ~~~ typescript
 import { Component } from '@angular/core';
 ~~~

2. Decorator component
~~~ typescript
 @Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
 ~~~

2. 1  Decorator component c/ uso de arquivos
~~~ typescript
 @Component({
  selector: 'button-component',
  templateUrl:'./button.component.html',
  styleUrl:'./button.component.css'
})
 ~~~

3. Exportação do component
~~~ typescript
 export class App {
  name = 'Angular';
 }
~~~

### Interpolação de dados

Considerando o componente a seguir:
~~~ typescript
import {Component} from '@angular/core'

@Component({
  selector: 'button-component',
  standalone: true,
  templateUrl:'./button.component.html',
  styleUrl:'./button.component.css'
})

export class Button{
  buttonText: string = "Acesse agora!";
}
~~~

Na exportação da classe podemos manipular propriedades, desse modo tornamos nossos componentes mais dinâmicos.
Ex: APIs e Banco de dados.
~~~ HTML
<div> 
  <button>{{buttonText}}</button>
</div>
~~~

## Estilo Global vs Scoped
A folha de estilo posicionado na raiz do elemento ( src in ), é aplicada de maneira global.
As regras de estilo scoped ( limitado a determinados components ) tem o nível de especificidade maior, portanoe é priorizada na hora da renderização dos elementos.
É possivel ter múltiplos estilos no componente, seguindo a regra de especificidade, podemos estilizar tanto pelo global quanto pelo scoped.

## Vamos colocar os componentes pra conversar!

Podemos receber parâmetros de um componente filho através da utilização de propriedades de entrada (input properties). As propriedades de entrada permitem que você passe dados de um componente pai para um componente filho. 
Veja os passos a seguir:
1. Importamos o módulo Input do Angular core
   ~~~ typescript
   import { Component, Input } from '@angular/core';
   ~~~
2. Definimos uma propriedade de entrada usando o decorator @input
   ~~~ typescript
   export class Button{
     @Input() label:string = '';
   }
   ~~~
3. No componente pai, passamos o valor desejado para a propriedade de entrada.
   ~~~ typescript
   export class App {
      buttonLabel: string = 'Carrinho';
   }
   ~~
4. No template HTML ( Ou arquivo ) podemos usar o valor da propriedade setada no componente pai.
   ~~~ HTML
   <!-- Interpolação -->
   <button-component label="{{ buttonLabel }}"></button-component>
   <button-component label="Compre aqui!"></button-component>
   
   <!-- Property binding --> 
   <button-component [label]="buttonLabel"></button-component>
   <button-component [label]="'texto'"></button-component>
   ~~~
   * A primeira sintaxe é mais flexível, aceitando também valores em string. é importante ficar atento a notação usada, qualquer valor entre as chaves duplas ( {{ }} ), é considerado uma variável.
   * A segunda sintaxe aceita apenas propriedades 


## Bynding syntax

Quando um estado de aplicação ( lógica ) passa para estado visual ( View ), chamamos de Data Binding ( Associação de dados ).

### Tipo de Binding

Troca de dados entre o template HTML e component TS pode ser feita atráves de 4 formas:

* Interpolação
* Property Binding
  
* Event Binding -> (evento) = "Handler()"
     * Criamos o HANDLER do evento na classe do componente
     * A chamada do evento é feita pelo elemento HTML, seguindo os padrões da linguagem de marcação.
     * Podemos também passar parametros para função Handler.
       Ex:
       ~~~ HTML
       <button (click)="getAlert()">{{ label }}</button>
       <button (click)="whatNumberIs(14)">{{ label }}</button>
       ~~~
* Two way data binding -> [(ngModel)] = "propriedade"
     * Comunicação em dois sentidos, template HTML para component TS e vice versa.
     * Podemos usar o property binding ( que tem sentido TS p/ HTML ) simultaneamente com event binding ( que tem sentido html p/ TS)
       Ex:
       ~~~ HTML
       <input type="text"
        [value]="placeholder" 
        (input)="placeholder = $any($event.target).value"
        /> 
         <p> {{ placeholder }} </p>
       ~~~
### Diretiva ngModel

Uma maneira mais prática de definir o two way data binding é usando a diretiva ngModel.
Ex: 
   ~~~ typescript
   [(ngModel)] = "placeholder"
   // É equivalente ao...
   [value]="placeholder" 
   (input)="placeholder = $any($event.target).value"
   ~~~
## Style Binding
Associação de  estilo, para tornar a estilização mais dinâmica.
Ex: 
~~~ typescript
export class EntryDataComponent {

  color: string = "red"

}
~~~
~~~ HTML
<p [style.color]="color"> {{ placeholder }} </p>
~~~ 
