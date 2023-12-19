# Componentes no Angular.
Component: Elemento visual, reutilizável e customizável. É um átomo da sua aplicação(peças de lego), geralmente é uma função JS/TS, que retorna HTML, CSS e eventos JS.

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







