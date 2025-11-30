Projeto em desenvolvimento!

Sistema de Gestão de Pedidos — Confeitaria

Projeto desenvolvido como parte de um projeto de extensão universitária, com o objetivo de criar um sistema simples e eficiente para organizar e visualizar pedidos de uma confeitaria.

Tecnologias Utilizadas
Frontend

React + Vite

TailwindCSS

Axios

Backend

Node.js

Express

CORS

MySQL2

Banco de Dados

MySQL

Arquitetura

Padrão MVC (Model–View–Controller) aplicado no backend

Sobre o Projeto

A confeitaria precisava de uma forma mais clara, rápida e organizada de visualizar pedidos feitos pelos clientes.
Este sistema permite cadastrar, visualizar, organizar e acompanhar pedidos de forma mais intuitiva.

O backend foi estruturado seguindo o padrão MVC, garantindo uma separação clara entre regras de negócio, controle e acesso aos dados.

Atenção Sobre o Método de Login (Importante!)

No momento, a autenticação funciona da seguinte forma:

 O frontend faz uma requisição GET que retorna todos os usuários cadastrados.
 Após isso, um find() é usado para localizar o usuário desejado.

 Este método NÃO é seguro e NÃO deve ser utilizado em produção.
Ele será futuramente corrigido e substituído por um fluxo de autenticação seguro (JWT, bcrypt, etc.).

Como Rodar o Projeto Localmente
1. Frontend

Acesse a pasta do frontend:

cd frontend


Instale as dependências:

npm install


Execute o projeto:

npm run dev


O frontend estará rodando em algo como:

http://localhost:5173/

✔️ 2. Backend

Acesse a pasta do backend:

cd backend


Instale as dependências:

npm install


Inicie o servidor:

npm start

🗄️ Banco de Dados

Para que o sistema funcione corretamente, é necessário:

Ter o MySQL instalado e ativo

Criar o banco de dados e tabelas conforme o modelo da aplicação

Logo trarei o script para criar o banco de dados!

📄 Licença

Este projeto foi desenvolvido para fins educacionais e de extensão universitária.
Você pode adaptá-lo e utilizá-lo conforme suas necessidades.

📧 Contato

Se quiser ajuda para evoluir o projeto, melhorar o backend, corrigir o sistema de login ou organizar o repositório, posso ajudar!
