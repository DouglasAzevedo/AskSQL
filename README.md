# AskSQL

AskSQL é uma aplicação que utiliza inteligência artificial para gerar queries SQL com base em um schema SQL e uma pergunta fornecida pelo usuário.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Uma chave de API válida da [OpenAI](https://platform.openai.com/)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/DouglasAzevedo/AskSQL.git
   cd asksql
   ```
2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
3. Crie o arquivo `.env` e adicione sua chave de API da OpenAI:
   ```env
   OPENAI_API_KEY=sua-chave-da-openai
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

Agora você pode acessar a aplicação em [http://localhost:3000](http://localhost:3000).

## Uso

Para usar o AskSQL, siga estas etapas:

1. Na página inicial, você verá um campo para inserir sua pergunta e um botão para enviar a consulta.
2. Digite sua pergunta sobre o schema SQL e clique em "Perguntar".
3. A aplicação irá gerar uma query SQL com base na sua pergunta e exibi-la na tela.

## Exemplos de Perguntas

Aqui estão alguns exemplos de perguntas que você pode fazer:

- "Quais são as colunas da tabela de usuários?"
- "Como posso selecionar todos os registros da tabela de pedidos?"
- "Mostre-me os 10 principais produtos por vendas."

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue para discutir melhorias ou relatar problemas.
