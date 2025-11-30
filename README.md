<h1>Projeto em desenvolvimento!</h1>

<h3>Sistema de Gestão de Pedidos — Confeitaria</h3>

Projeto desenvolvido como parte de um projeto de extensão universitária, com o objetivo de criar um sistema simples e eficiente para organizar e visualizar pedidos de uma confeitaria.

<h3>Tecnologias Utilizadas</h3>

<h5>Frontend</h5>

React + Vite

TailwindCSS

Axios

<h5>Backend</h5>

Node.js

Express

CORS

MySQL2

<h5>Banco de Dados</h5>

MySQL

<h5>Arquitetura</h5>

Padrão MVC (Model–View–Controller) aplicado no backend

<h2>Sobre o Projeto</h2>

A confeitaria precisava de uma forma mais clara, rápida e organizada de visualizar pedidos feitos pelos clientes.
Este sistema permite cadastrar, visualizar, organizar e acompanhar pedidos de forma mais intuitiva.

O backend foi estruturado seguindo o padrão MVC, garantindo uma separação clara entre regras de negócio, controle e acesso aos dados.

<h2 style="color:yellow;">Atenção Sobre o Método de Login (Importante!)</h2>

No momento, a autenticação funciona da seguinte forma:

 O frontend faz uma requisição GET que retorna todos os usuários cadastrados.
 Após isso, um find() é usado para localizar o usuário desejado.

 Este método <span style="color:red;">NÃO</span> é seguro e style="color:red;">NÃO</span> deve ser utilizado em produção.
Ele será futuramente corrigido e substituído por um fluxo de autenticação seguro (JWT, bcrypt, etc.).

<h2>Como Rodar o Projeto Localmente</h2>
<h5>Frontend</h5>

Acesse a pasta do frontend:

cd frontend


Instale as dependências:

npm install


Execute o projeto:

npm run dev


O frontend estará rodando em algo como:

http://localhost:5173/

<h5>Backend</h5>

Acesse a pasta do backend:

cd backend


Instale as dependências:

npm install


Inicie o servidor:

npm start

<h5>Banco de Dados</h5>

Para que o sistema funcione corretamente, é necessário:

Ter o MySQL instalado e ativo

Criar o banco de dados e tabelas conforme o modelo da aplicação

Logo trarei o script para criar o banco de dados!

<h2>Licença</h2>

Este projeto foi desenvolvido para fins educacionais e de extensão universitária.
Você pode adaptá-lo e utilizá-lo conforme suas necessidades.
