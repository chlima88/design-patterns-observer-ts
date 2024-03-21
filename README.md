# Exemplo de Aplicação do Design Pattern Observer 🔍 em TypeScript 

Este é um exemplo simples de aplicação do padrão de projeto Observer em TypeScript. O padrão Observer é um padrão comportamental que permite que um objeto, chamado de "provider", mantenha uma lista de seus dependentes, chamados de "observers", e notifique-os automaticamente sobre qualquer mudança de estado, geralmente por meio de um método de callback.

## Estrutura do Projeto

- `src/Subscriber.ts`: Contém a implementação dos objetos `serviceXXX`, que representa uma entidade interessada em receber as mensagens do topico no qual se inscreve.
- `src/Provider.ts`: Contém a implementação do objeto `eventManager`, que é a entidade responsável por gerenciar as inscrições e realizar as devidas notificações de estado aos subscribers.
- `src/main.ts`: Arquivo principal que cria as instâncias de `Subscriber` e `Provider`, adiciona alguns observadores e simula mudanças de estado para demonstrar o padrão Observer em ação.

## Requisitos

Certifique-se de ter o Node.js e o TypeScript instalados em seu ambiente de desenvolvimento antes de executar este projeto.

## Como Executar o Projeto

1. Clone este repositório:

`git clone https://github.com/chlima88/design-patterns-observer-ts.git`


2. Navegue até o diretório do projeto:

`cd design-patterns-observer-ts`


3. Instale as dependências do projeto:

`npm install`


4. Compile o código TypeScript:

`npm run build`


5. Execute o arquivo principal:

`node dist/main.js`


Isso iniciará a aplicação de exemplo e você verá as saídas correspondentes à interação entre o `Subject` e os `Observers`.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um pull request ou relatar problemas para melhorar este exemplo de aplicação do padrão de projeto Observer em TypeScript.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
