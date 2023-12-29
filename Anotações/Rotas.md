# Rotas
Definen a exibição de componentes de acordo com a URL acessada.

## Anatomia de Rotas

O arquivo de configuração de rotas em nossos projetos será sempre o app-routing.module.ts ( Módulo especifico para trabalhar com roteamento)

~~~ typescript
import { NgModule } from '@angular/core'; // trazendo o NgModule do módulo central do Angular 
import { RouterModule, Routes } from '@angular/router'; // Módulo que trabalha diretamente com a camada de roteamento, importamos uma classe e um tipo

const routes: Routes = []; //um array de objetos do tipo Routes, usado para definir nossas rotas

//Decorator padrão
@NgModule({
  imports: [RouterModule.forRoot(routes)], //Importa e utiliza um metodo que define as rotas padrões
  exports: [RouterModule] //Exportamos nosso módulo de rotas
})
export class AppRoutingModule { }
~~~

### Declaração de rotas
Exemplo de código para declaraçãod e rotas
~~~ typescript
const routes: Routes = [
  {path:'',component: TitleComponent, pathMatch:'full'},
  {path:'portfolio', component: CardComponent},
  {path:'**', redirectTo:''} // rota coringa, usada para demais URLs que não foram definidas.
];
~~~
1. **path** : Define a URL que devera ser acessada
2. **component** : é o componente que devera ser exibido ao acessar a URL correspondente definida no path.
3. **pathMatch** : É opcional, define se a URL deve ser exatamente como foi informada ( valor full ) ou deve ser considerada como prefixo ( valor prefix, padrão)
    * É recomendado usar o valor Full para a rota padrão


Toda a navegação de rotas acontece no elemento <router-outlet></router-outlet> pois o mesmo é uma diretiva e está inserido no arquivo principal de chamada ( app.component.html ).

### Navegando entre páginas com o RouterLink

É comum usarmo um menu com links para acessar as diversas páginas de nosso site, porém no contexto de um SPAs isso pode mudar bastante.

Semppre que acessar um link, gerado pela tag <a></a> e utilizamos o atributo Href para atribuir a URL desejada, a página é recarregada e isso fere o conceite de carregar a página de maneira única.

Para solucionar esse problema, utilizados um property data binding que nor permite definirmos a rota que deverá ser acessada, sem causa recarregamento da página. Exemplo a seguir:

~~~ typescript
<nav>
    <ul>
        <li>
            <a [routerLink]="['/']">Home</a> //[routerLink]="['/URL-desejada']" - A url deve ser informada entre aspas simples
        </li>
        <li>
            <a [routerLink]="['/portfolio']">Portifolio</a>
        </li>
    </ul>
</nav>
~~~

Podmos adicionar classes CSS de acordo com cada rota definida, para isso também usamo um property data binding.
A classe é aplicada caso a rota esteja ativa, ou seja, esteja sendo acessada naquele momento.
~~~ typescript
<nav>
    <ul>
        <li>
            <a [routerLink]="['/portfolio']">Portifolio</a>
        </li>
    </ul>
</nav>
~~~

Além disso, podemos definir que a classe só será aplicada a rota ativa se atender determinadas condições
Por exemplo, podemos usar a opção [routerLinkActiveOptions]="{exact: true}" que define que a classe só será aplicada a rota ativa se a URL for exatamente a definida no link ( similar ao full do pathMatch)

### recuperação de parâmetro das rotas

Configuramos o uso de parametros nas rotas:
~~~ typescript
{path:'portfolio/:id', component: CardComponent},
~~~
 
Realizamos uma injeção de dependência na classe construtora do  mesmo componente:
* Criamos uma propriedade do tipo classe ActivatedRoute e a usamos para acessar os paramêtros da rota
* toda manipulação de paramêtro é feita dentro do metódo subscribe, que aceita uma arrow function que manipula diretamente os paramêtros da rota.
~~~ typescript
constructor(private activeRoute: ActivatedRoute) { // injeção de dependência 
    this.activeRoute.params.subscribe( 
      res => console.log(res)
    )
    
  }
~~~

#### queryParams 

São os paramêtros passados apos o sinal de interrogação (?name=gabriel$lastname=knupp)
* O procedimento para acessar estes paramêtros são muito similares aos descritos acima.
Exemplo:
~~~ typescript
this.activeRoute.queryParams.subscribe(
      res => console.log(res)
)
~~~

### Redirecionamento por componente

Podemos adicionar a navegação pra cada componente, para isso usamos novamente uma injeção de dependência na classe construtora.
* Criamos uma propriedade do tipo Router e com isso podemos definir algumas regras de navegação
* Dentro do **ngOnInit** setamos um intervalo de 5 segundos ( em milisegundos ) para cada acesso ao componente, após esse tempo seremos redirecionados para a página principal.
~~~ typescript
 constructor(private browser: Router) {}
 ngOnInit(): void {
    setInterval(() => {
      this.browser.navigate(['/'])
    },5000)
  }
~~~

## Rotas children

No arquivo de configuração das rotas, podemos configurar quais são as rotas filhas de uma rota especifíca.

~~~ typescript
//Rota portfolio
//Rota filha portfolio/1
//Rota filha portfolio/1?name=gabriel
{path:'portfolio', component: CardComponent, children: [
    {path:':id',component: CardComponent}
    {path:':id:token',component: CardComponent}
  ]},
~~~

### Paramêtros de rotas children

Precisamos deixar explicito que desejamos acessar os parametros da rota filha.
Para isso adicionamos o seguinte trecho de código:
~~~ typescript
 this.activeRoute.firstChild?.params.subscribe( // acessa os parametros de da rota que é o primeiro filho da rota ativa
~~~