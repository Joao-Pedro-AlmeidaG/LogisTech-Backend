# 🚚 LogisTech Backend

Backend do **LogisTech**, um sistema de gestão de frotas e entregas desenvolvido para organizar operações logísticas, centralizar informações e facilitar o gerenciamento de veículos e entregas.

O projeto utiliza uma **arquitetura em camadas**, separando responsabilidades entre configurações, controladores, modelos, rotas, serviços e utilitários.

## 📋 Sobre o projeto

O LogisTech Backend foi desenvolvido para servir como base de uma aplicação de gerenciamento logístico, permitindo a construção de funcionalidades relacionadas ao controle de frotas e entregas.

A organização do projeto busca facilitar a manutenção, a evolução do sistema e o trabalho em equipe.

## 🛠️ Tecnologias utilizadas

* **Node.js** — Ambiente de execução JavaScript.
* **Express** — Framework para criação do servidor e das rotas.
* **MongoDB / Mongoose** — Banco de dados e modelagem das informações.
* **GraphQL / Apollo Server** — Estrutura para consultas e operações de API.
* **JWT** — Autenticação e autorização de usuários.
* **bcryptjs** — Criptografia de senhas.
* **CORS** — Controle de acesso entre origens.
* **dotenv** — Gerenciamento de variáveis de ambiente.
* **Nodemon** — Reinicialização automática do servidor durante o desenvolvimento.

## 📁 Estrutura do projeto

```text
LogisTech-Backend/
│
├── src/
│   ├── config/         # Configurações da aplicação
│   ├── controllers/    # Controle das requisições
│   ├── graphql/        # Configurações e operações GraphQL
│   ├── middlewares/    # Middlewares da aplicação
│   ├── models/         # Modelos e estruturas de dados
│   ├── routes/         # Rotas da API
│   ├── services/       # Regras de negócio
│   ├── utils/          # Funções utilitárias
│   ├── app.js          # Configuração da aplicação
│   └── server.js       # Inicialização do servidor
│
├── .env.example        # Exemplo das variáveis de ambiente
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

* [Node.js](https://nodejs.org/)
* npm
* MongoDB

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Joao-Pedro-AlmeidaG/LogisTech-Backend.git
```

### 2. Acesse a pasta do projeto

```bash
cd LogisTech-Backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência.

Exemplo:

```env
PORT=3000
MONGODB_URI=sua_string_de_conexao
JWT_SECRET=sua_chave_secreta
```

> **Importante:** não compartilhe chaves secretas ou credenciais reais no GitHub.

### 5. Inicie o servidor

Para executar em modo de desenvolvimento:

```bash
npm run dev
```

Para executar normalmente:

```bash
npm start
```

## 🔐 Autenticação

O projeto utiliza **JWT (JSON Web Token)** para autenticação e **bcryptjs** para proteção de senhas.

As funcionalidades de autenticação devem ser utilizadas conforme as regras de acesso definidas pela aplicação.

## 🧩 Arquitetura

A aplicação segue uma organização em camadas:

* **Routes:** recebem e direcionam as requisições.
* **Controllers:** controlam o fluxo das operações.
* **Services:** concentram as regras de negócio.
* **Models:** representam os dados da aplicação.
* **Middlewares:** executam validações e processamentos intermediários.
* **Config:** reúne configurações necessárias para o funcionamento do sistema.

Essa separação contribui para um código mais organizado, reutilizável e fácil de manter.

## 📌 Funcionalidades

O projeto tem como objetivo oferecer uma base para funcionalidades como:

* Gestão de veículos.
* Controle de frotas.
* Gerenciamento de entregas.
* Organização de informações logísticas.
* Autenticação de usuários.
* Integração com banco de dados.
* Comunicação por API.

> As funcionalidades disponíveis podem variar conforme o desenvolvimento atual do projeto.

## 👥 Desenvolvimento

Este projeto está sendo desenvolvido em equipe, com o objetivo de aplicar conceitos de desenvolvimento backend, arquitetura de software, banco de dados e integração de APIs.

## 📄 Licença

Este projeto está em desenvolvimento para fins acadêmicos.

---

**LogisTech Backend**
Sistema de Gestão de Frotas e Entregas 🚚
