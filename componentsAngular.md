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

3. Exportação do component
~~~ typescript
 export class App {
  name = 'Angular';
 }
~~~


   






