# Angular CLI

Instalação:

npm install -g @angular/cli@14.1.2
--> Instalação global ( -g ) da versão 14.1.2 ( usada no curso )

Verificar se instalação deu certo.

ng help ou ng version
--> ng é um serviço do angular similar ao npm do node
--> Mensagens brancas -> Boas
--> Mensagens Amarelo -> avisos
--> Mensagens vermelho -> Erros

Comandos mais usados
> ng add <collection> -> Adiciona uma biblioteca externa.
> ng serve [project] -> compila seu projeto e sobe um servidor.
> ng new [name]  -> Cria um novo espaço de trabalho do Angular.
> ng doc <keyword> -> Abre a documentação do angular.io e busca pela palavra-chave informada.
> ng generate -> gera ou modifica aquivos baseando-se em alguns esquemas.
--> ng generate --help para visualizar os esquemas disponiveis
EX: ng generate component nameComponent ou ng g c title ( uso de alias para os comandos)
>> Todos conmandos possuem alias, consultar ng help
> ng sempre fornece um logo visual do que está sendo feito

## Estrutura de arquivos locais

#### /src out
- Angular.json -> Configurações gerais do Angular
- tsconfig.json ( podendo ser estendido em outros arquivos similares )
- package.json e package-lock.json -> Configurações do projeto node
- karma.conf.js -> Arquivo de configuração do karma ( ferramenta de testes)
- .browserlistrc -> retrocompatibilidade com navegadores antigos
- .editorconfig -> Configuração do editor, em sentido de tabulação e identação, por exemplo.

#### /src in
- index.html -> página principal, onde os componentes são injetados
- main.ts -> arquivo principal de TS, para importaçãod e módulos / componentes
- polyfills.ts -> Usado para retrocompatibilidade em navegadores
- styles.css -> estilos globais
- test.ts -> arquivo principal para gerenciar testes
- /app -> arquivos da aplicação criada
- /assets -> recursos visuais e estáticas, excluindo códigos
- /environments -> Váriáveis globais, separados em produção e não produção.

## Ciclo de vida de um componente
 
-> OnInit -> Executa quando o componente é iniciado, chamada da função ngOnInit(): void{}
É uma interface, que deve ser importada e implementada atráves da classe exportada.
Ex: Pode ser considerado o nascimento do componente

### Life cicle hooks

São oito hooks no total, sendo eles:

-> ngOnInit() -> ao ser iniciado
-> ngOnChanges() -> para alterações
-> ngDoCheck() -> para checagens

#### sub-eventos de check
-> ngAfterContentInit() -> Executa quando o Angular realiza qualquer projeção de conteúdo em um componente.

-> ngAfterContentChecked() -> Executa sempre que o conteúdo (TS) do componente é verificado pelo mecanismo de detecção de alteraçao do Angular

-> ngAfterViewInit() -> Executa depois que o componente é totalmente inicializado.

-> ngAfterViewChecked() -> Executa quando a visualização(HTML) do componente é verificada pelo algoritmo de detecção de alterações do Angular.

NA ORDEM:  eventos checked -> eventos de content(TS) -> eventos de view(HTML)

-> ngOnDestroy() -> Ao destruir um elemento
--> é necessário destruir componentes não utilizados para evitar vazamentod e memória ( memoty leak)
--> Para destruir um componente, usamos atributos do NG nos elementos HTML ( *ngATRIBUTE)
--> *ngIf="valor_booleano" -> só exibe o componente se o valor for true
--> criamos uma função que muda o valor de uma váriavel booleana ( declarada na classe do componente pai) e adicionado num botão de "excluir"
--> Assim que o componente for destruido, será executado o hook ngOnDestroy().