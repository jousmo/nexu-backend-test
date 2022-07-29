# Nexu Backend Test

Nexu backend challenge

## Requirements

- NVM (Node 16.15.1) - [Docs NVM]('https://github.com/nvm-sh/nvm')
- Docker - [Docs Docker](https://docs.docker.com/get-docker)

## Settings

- ExpressJS 4.18.1
- Ava 4.3.1
- Conventional Commits 17.0.3
- Docker Compose
- Sequelize V6 
- Postgres V14 Database (docker-compose.yml)

## Hooks

- Pre commit: Conventional Commits & Lint
- Pre push: Test

### Releases

- `npm run release` to launch a standard release.
- `npm run release:minor` to launch a minor release.
- `npm run release:patch` to launch a patch release.
- `npm run release:major` to launch a major release.

### Install

- Install package for project `npm install`
- Create `.env` file

```
NODE_ENV= development | production | test
NODE_PORT=

# For docker postgres database with sequalize
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_DIALECT=
DB_HOST=
DB_LOGGING=
DB_SEEDER_STORAGE=
DB_NAME_TEST=
```

- `docker-compose up -d` Init docker-compose.yml for postgres database

## POC => Hexagonal Architecture
This project implements dependency injection, you can use the mock db or connect to the database

Note: if you are going to use the database repository (brandsSequelizeRepository - modelsSequelizeRepository), you must execute the following

- `npm run db:init` build the db and load seeds

### Example
In the routes `brands`

```JS
// Use brandsSequelizeRepository or brandsMockRepository
const { brandsSequelizeRepository } = require('../repositories')

...

const brands = await brandsServices(brandsSequelizeRepository).findBrands()
```

In the routes `models`

```JS
// Use modelsSequelizeRepository or modelsMockRepository
const { modelsSequelizeRepository } = require('../repositories')

...

const models = await modelsServices(modelsSequelizeRepository).findModels(query)
```

### Modes

- `npm run start` to run for production
- `npm run dev` to run for development


### Tests

- `npm run test` to run tests on demand.

### Api V1 Routes

- `/api/v1`

#### Examples

```
GET    /brands
GET    /brands/:id/models
POST   /brands
POST   /brands/:id/models
PUT    /models/:id
GET    /models
```

=)
