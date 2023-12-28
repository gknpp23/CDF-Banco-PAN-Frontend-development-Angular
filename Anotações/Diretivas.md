# Diretivas

Diretivas são a maneira que o angular manupula e altera a DOM dinâmicamente, entenda-os como comandos especiais.

## Diretivas de atributo

Alteram a aparência ou comportamento de um elemento, componente ou outra diretiva

- **NgClass** - Adiciona ou remove conjunto de classes CSS
    * Podemos adicionar classes CSS de maneira mais dinâmica, atráves do uso dessa diretiva em conjunto com um property binding, onde passamos o nomes das nossas classes.
    * Exemplo: 
    ~~~ HTML
    <p [ngClass]="estilo"> Exemplo!</p>
    ~~~
    

- **NgStyle** - Adiciona ou remove um conjunto de estilos ao HTML ( estilos inline )
    * *Exemplo*:
    ~~~ HTML
    <h1 [ngStyle]="{'background': corFundo, 'color': corTitulo}"> Curso Angular </h1>
    ~~~
    * Como no exemplo acima, temos a opção de passar estilo inline de maneira dinâmica.
    * Atráves de um property binding, passamos um objeto que possui propriedades CSS ( atribuidas com aspas simples) e que podem ter seus valores declarados na classe do componente

- **NgModel** - Adiciona vinculação de dados bidirecional a um elemento de um formulário.
    * Não vêm por padrão no angular, como é usado para trabalhar com peças de formulário, deve ser importado da seguinte forma:
        ~~~ typescript
        import { FormsModule } from '@angular/forms';
        ~~~
    * Possui uma notação de "caixa de banana"
        ~~~ HTML
        <input type="text" [(ngModel)]="item">
        ~~~
        * podemos obter o valor de item e fazer uma interpolação no HTML
    * dispara um evento enquanto seta uma propriedade -> vinculação de dados bidirecional

- **NgContent** - é uma forma de receber elementos (componentes ou elementos HTML) de um componente pai e definir a ordem de exibição no elemento filho.
    * *Exemplo* :
    ~~~ HTML
    <app-comp-atributos> 
        <h2> teste </h2> 
        <p> Eu vim de fora!</p>
    </app-comp-atributos>
    ~~~
    * No html do componente pai, chamamos o seletor do componente filho e podemos inserir outros elementos HTML entre as chaves.

    * No HTML do componente filho, os elementos não serão exibidos automaticamente, até que usemos o ng-content e selecionemos qual elemento vamos exibir. Podendo inseri-los em qualquer ponto do documento.

    ~~~ HTML
    <ng-content select="h2"></ng-content>
    ~~~



## Diretivas estruturais

Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela.

- **NgIf** - Condicional que verifica se o modelo deve ser visualizado ou não

    * *Exemplo*: 
    ~~~ HTML
    <!-- Não sera exibido -->
    <p *ngIf="false">Component here</p> 
    ~~~

    * Valor padrão é "true"
    * Podemos chamar no component ou nos seus elementos.
    * É possivel realizar um data binding em conjunto com essa diretiva. Por exemplo, passar uma variável do componente pai para o componente filho.
        * Exemplo: 
        ~~~ HTML 
        <app-card *ngIf="IsAliveCard"></app-card>
        ~~~
        * Variavél foi definida na classe do componente pai, com isso podemos fazer a associação dos dados.

    ### Ngtemplates: 
    São blocos condicionais que servem de modelo, utilizados em conjunto com a diretiva NgIf
    
    * *Exemplo* :
        ~~~ HTML
        <app-card *ngIf="IsAliveCard; else misteryBlock"></app-card>
        <ng-template #misteryBlock>
        <p>I am a mistery..</p>
        </ng-template>
        ~~~
    * Nó código acima, o bloco criado recebe um alias de misteryBlock e é associado a condição negativa da diretiva NgIf.
    * Caso o valor da variável IsAliveCard seja false, o misteryBlock é exibido.
    * Podemos também usar o NgIf com uma property binding para habilitar o bloco do Ngtemplate ou usar alguma propriedade setada na classe do componente.
    ~~~ typescript
    [ngIf] = "true"
    ~~~




- **NgFor** - Repete um elemento para cada item em uma lista
    * *Exemplo*:
    ~~~ HTML
    <li *ngFor="let p of produtos"> {{ p }}</li>
    ~~~

    * é percorrido a lista produtos, clarada na classe do componente e adicionado o valor a interpolação dentro do elemento 
    ~~~ HTML 
    <li></li>
    ~~~
    * A sintaxe do for e a mesma do JS

    ### Reatividade: 
    é o conceito em que algo é reativo a aquilo que está conectado.

    * No código acima, vemos um bom exemplo disso, pois se algo for adicionado ou removido da lista produtos, será exibido na página sem precisar de nenhum comando adicional.

    * Podemos usar também a variável index, que é autoincrementado e nos forneces os indices de uma lista.

- **Ngswitch** - Utilizado para alternar entre comportamentos alternativos

    * Essa diretiva se propõe a implementar blocos condicionais com valores pré definidos, muito similar ao switch case de uma linguagem de programação.

    * Para isso usamos as opções:
        * **[ngSwitch]="ValorPropiedade"** - Valor da propriedade será definida na classe do componente

        * ***ngSwitchCase = " 'opção1' "** - Diretiva que define a opção e o valor esperado ( entre aspas simples, após as aspas duplas pois se trata de um property binding)

        * ***ngSwitchDefault** - Não é passado nenhum valor, pois se trata da cláusula de execução padrão. Adicionado apenas no bloco que deverá ser exibido caso nenhuma das opções anteriores sejam validadas.

