# Módulos

Módulos são "caixas" para organizar nossa estrutura de código.

Serve para organizar:
 - Componentes
 - Diretivas
 - Pipes
 - Services

Todo componente precisa estar inserido em um módulo, podendo ter sub-módulos ( gavetas dessa caixa ).

## Anatomia de um módulo Angular

Em um módulo posso importar outros módulos
Exemplo: Um módulo principal ( app.module.ts)

posso armazenar em um módulo: Componentes, diretivas e pipes ( para tratar fluxos de dados), Services ( provem dados para componentes ).

Podemos também exportar um módulo para outros módulos.

Exemplo de um módulo principal do Angular:
~~~ typescript 

import { NgModule } from '@angular/core';

//Decorator da interface NgModel
@NgModule({
  // onde definimos declarações como componentes, diretivas e pipes
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent
  ],
  // Definimos importações da biblioteca ( módulos próprios ou do Angular)
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // Definimos algumas regras de exportação, por padrão ele não vem definido no módulo principal
  exports: [],

  // Relacionado a camada de services, que trabalha com os dados da aplicação.
  providers: [], 

  // Relacionado a inicialização, chama o componente principal
  bootstrap: [AppComponent] 
})
export class AppModule { }
~~~

### Trabalhando com sub-módulos na prática

Comando para criar novos módulos
~~~ typescript
ng generate module nameModule
~~~

Ao criarmos um módulo chamado lista, obtemos o seguindo código:
Arquivo foi criado no src/app/lista
~~~ typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo que nos fornece os principais comandos do Ng ( NgIf, NgFor..)



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
~~~

Nós que definimos como relacionar nossos módulos, não são importados automaticamente.


Por exemplo, podemos criar um componente input e relacionar ao módulo lista com o comando a seguir

~~~ typescript
ng generate component lista/input
~~~

Um vez com o módulo criado, podemos importá-lo no módulo principal e utilizar todos os recursos que ele exportar.
Por isso é importante se atentar a declaração do exports np arquivo de configuração de cada módulo.

Por convenção, é criado um módulo chamado **shared** para organizar os componentes que são utilizados por diversas páginas e um módulo chamado **pages**, para definir oinde os componentes estão sendo usados.
E para manter a organização de um projeto, geralmente os componentes são organizados em módulos que correspondem as páginas em que são utilizados.
*Exemplo* : 
~~~ typescript
ng g m pages/home
~~~