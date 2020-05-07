# Repo do Desafio2 da Maratona DevFullCycle 2.0

### Rodando o projeto localmente

```bash
# instale as dependencias
$ npm install

# crie/atualize o banco de dados
$ npm run typeorm migration:run

# inicie o servidor com hot reload
$ npm run start:dev

# se precisar atualizar o esquema do banco de dados
$ npm run typeorm migration:generate -- -n <Nome da Migration>
```

### Executando a imagem Docker do projeto

```bash
$ docker run -p 3000:3000 bmnds/desafio2
```

### Gravando e lendo maratonas

```bash
# crie uma nova
$ curl --location --request POST 'http://localhost:3000/maratona' \
      --header 'Content-Type: application/json' \
      --data-raw '{
	      "aula": "gRPC",
        "url": "https://www.youtube.com/watch?v=VMCRRznA3g0"
      }'

# recupere a lista
$ curl --location --request GET 'http://localhost:3000/maratona'
```

### Tecnologias utilizadas
* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [Sqlite3](https://www.npmjs.com/package/sqlite3)
* [Node.js](https://nodejs.org/)

### Repositórios do projeto
* [Desafio2 em GitHub](https://github.com/bmnds/maratona_fullcycle_2-desafio2)
* [Desafio2 no DockerHub](https://hub.docker.com/repository/docker/bmnds/desafio2)