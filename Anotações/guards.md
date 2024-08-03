# Guards

São "guardas" das rotas, serve justamente para controlar quais rotas são públicas e quais são privadas.

Pense nesse conceito como um guarda de trânsito.

## Anatomia de um Guard
Criado com o comando 

ng g(enerate) g(uard) <nome-guard>

Ao crirar um guard, devemos escolher  os tipos CanActivate, CanActiveChild, CanDeactivate e CanLoad.
Inclusive podemos marcar várias dessas opções.
Devemos guardar estes arquivos guards numa pasta especifica para manter a organização.

E gerado um arquivo guard.ts 

Importa o injectable para injeção de dependência, o obervable e serviços de rotas

possui um decorator @injectable
provideIn: 'root'

Exporta uma classe nameGuard que implementa o metodo escolhido, CanActivate, por exemplo.
Nessa classe tem um metodo que irá receber uma rota e o estado dela e irá retornar um Observable ( Boolean ou URL Tree), ou uma Promise( Boolean ou UrlTree), ou um boolean ou uma URLtree

NUNCA crie regra de negócios no seu componente, de preferência tenha tudo isso numa pasta separada( como services, por exemplo)

CTRL + . --> astalho para realizar importações automáticas no VScode

Um guard sempre irá atuar sobre uma rota, para isso devemos chamar o evento que ele trata na rota escolhida e passar a classe .ts do arquivo guard.

Duas exclam,ações converte um valor para Boolean
EX: !!localStorage.getItem('token')

Verificar repo do curso para extrair exemplos de código.


