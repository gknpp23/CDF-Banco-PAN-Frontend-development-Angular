# 4 Camadas de um WebApp

 Os diferentes frameworks disponíveis no mercado, resolvem os mesmos problemas porém de maneiras diferentes.


## Estes problemas são: 

1. Trabalhar com componentes
* Responsável pela navegação, fazendo a troca de URL sem recarregar a página, mudando somente os componentes exibidos.
2. Realizar o gerenciamento de estados
* Responsável por garantir que as informações dos componentes não estão dessincronizadas e facilitam a comunicação entre os mesmos. Ex: Atualizar carrinho de compra ( Componente ) ao clicar no botão ( O outro componente ) de comprar produto
- Tecnologias: JS | TS | Bibliotecas Recoil | Storeon 

- Relacionados a frameworks:
    - React:  Flux - Redux - context API
    - Vue.js: Vuex 
    - Angular: NGRX - NGXS

3. Roteamento ( Routing & Navigation)
* Responsável pela navegação, fazendo a troca de URL sem recarregar a página, mudando somente os componentes exibidos. Ex: meuapp/login ou meuapp/home
- Tecnologias: History API ( Nativo nos browsers ), React-Router, Vue-Router Angular RoutingModule

4. Renderização ( Render )
* Responsável por decidir a melhor maneira de acessar e entregar para o browser o componente pronto para que possa ser renderizado na tela.

### 3 estratégias de renderização 

> Escolher a solução de acordo com o foco da aplicação.

- 100% server : Entrega documentos HTML prontos, direto do backend

- parte Server e parte Client : Servidor envia parte dos recursos renderizáveis e as demais é fornecido pelo cliente, unindo todos eles, temos as páginas completas.

- 100% client : Tudo é renderizado pelo cliente (Onde o Angular e React atuam).

### Entedimento geral das camadas

> Construção de WebApp ou SPAs

É possivel aplicar essas camadas "na unha", sem uso de framework, porém aumenta muito a complexidade.

<<<<<<< HEAD
=======

>>>>>>> 9de2ab1 (update Camadas-webApp.md)
