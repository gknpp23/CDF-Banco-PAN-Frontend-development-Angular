# Services

Todo componente possui um arquivo .typescript que implementa a parte lógica da renderização.

Services são arquivos typescript usados para regras de negócios ( acesso a APIs, requisição de dados, etc..).
Um service pode se comunicar a um ou mais componentes, em que cada um vai definir como irá consumir os dados fornecidos.

Criar um service que seja o "especialista" para a tarefa especifica é considerado uma boa prática.

No angular há um arquivo para cada função, pense dessa forma na hora de criar seus próprios services para prover dados

Para criarmos um novo service: ng g(enerate) s(ervice) [path]/nomeService

## Anatomia de um service

~~~ typescript
import { Injectable } from '@angular/core'; // importação do angular core para trabalhar com injeção de dependência

@Injectable({ //Decorator da classe importada
  providedIn: 'root' // Injetado na raiz do projeto
})
export class PokemonService { //Exportação da classe TS criada
    //pOdemos incluir o objeto injetável criado nos providers dos módulos que vamos trabalhar com os dados fornecidos
    // Exemplo: providers: [PokemonService],
  constructor() { }
}
~~~

### Como injetar o service?
 Na classe TS do componente que irá consumir os dados fornecidos, fazemos da seguinte forma:
~~~ typescript
constructor(
    private service: PokemonService // Ao fazermos assim, já é criado uma instância da classe e após isso é injetada ( conceitos de design patterns ) e assim podemos acessar todos seus recursos e métodos
  ) { }
~~~
### Comunicação de um service 
Um service pode "conversar" com outro service, ou com o environment
~~~ typescript
import { environment } from 'src/environments/environment';
export class PokemonService {
  private baseURL: string = "";
  constructor() { 
    this.baseURL = environment.pokeAPI // importação das contantes globais do environment
   }
}
~~~

### Trabalhando com módulo HTTP

Importar o módulo para trabalhar com requisições HTTP no app.module.ts

import { HttpClientModule } from '@angular/common/http' e adicionamos o nome da classe nos imports do 

Usamos a classe HttpClient no arquivo ts de services
Para isso é so importarmos a classe:
import { HttpClient } from '@angular/common/http'; 