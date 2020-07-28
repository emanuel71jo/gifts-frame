# Gifts Frame

> Esse projeto é para fazer um gerenciamento de interesses de presentes para qualquer tipo de festa e/ou celebração, onde é possível realizar o cadastro e a partir dai criar uma lista de presentes que poderão ser dado, também é gerado um código para que seja distribuído para os convidados e eles poderão ver as sugestões de presentes para a festa e marcar qual ele irá levar.

---

## Desafio e Aprendizagem

> Nesse projeto procuro aprofundar um pouco mais meus conhecimentos sobre o NodeJs e a utilização de tecnologias como o TypeScript, Redis para o cache, MySQL para os dados da aplicação, Yup para validação de formulários e testes com o Jest, TypeORM para para lidar com o Postgres.

---

## Funcionalidade

- [x] Cadastro do celebrante
- [x] Criar um evento
- [x] Adicionar itens a esse evento
- [x] Remover itens do evento
- [x] Listar itens de um evento
- [x] Listar eventos de um celebrante
- [x] Cancelar um evento
- [x] Autenticação do celebrante
- [x] Adicionar item a lista dos presentes já marcados.

---

## Rotas

| Method | Rota              | Body                                                                                                                                     | Params                                                                                      | Descrição                                                           |
| ------ | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| GET    | _/gift/:party_id_ | empty                                                                                                                                    | **party_id\*:** Identificador da festa para listar os presentes dela                        | Rota que lista todos os presentes que podem ser levados nessa festa |
| POST   | _/gift_           | **name\*:** Nome do presente para adicionar em uma festa. <br/> **party_id\*:** Identificador da festa a qual o presente será adicionado | empty                                                                                       | Rota que serve para adicionar os presentes de uma festa             |
| DELETE | _/gift/:id_       | empty                                                                                                                                    | **id\*:** Identificador do presente que sera cancelado e/ou removido da festa               | Rota para cancelar um presente da festa                             |
| GET    | _/party_          | empty                                                                                                                                    | empty                                                                                       | Lista todas as festas do usuário que esta autenticado               |
| POST   | _/party_          | **name\*:** Nome da festa e/ou evento <br/> **party_date_at\*:** Data que ocorrerá o evento e/ou festa                                   | Rota que serve para cadastrar um novo evento e/ou festa para o usuário que esta autenticado |
| DELETE | _/party/:id_      | empty                                                                                                                                    | **id\*:** Identificador da festa que será removida e/ou cancelada                           | Rota que serve para cancelar e/ou remover um evento                 |
| POST   | _/signup_         | **email\*:** Email do celebrante <br/> **password\*:** Senha do celebrante                                                               | Rota que serve para o cadastro de um celebrante                                             |
| POST   | _/authenticate_   |                                                                                                                                          | **email\*:** Email do celebrante <br/> **password\*:** Senha do celebrante                  | Rota que serve para o celebrante se autenticar                      |

---

## Autor

👤 **emanuel71jo**

- Website: emanuel71jo.github.io
- Github: [@emanuel71jo](https://github.com/emanuel71jo)
- LinkedIn: [@João Emanuel](https://linkedin.com/in/Joao-Emanuel)

---

## Show your support

Give a ⭐️ if this project helped you!

---
