## Nestjs with GraphQL

POC for Nestjs with GraphQL

## Installation

```bash
$ yarn install
```

## Run Docker

```bash
docker run -d --name app-blog -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27019:27017 mongo
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
