# Nexu Backend Test

Nexu backend challenge

## Requirements

- NVM (Node 16.15.1) - [Docs NVM]('https://github.com/nvm-sh/nvm')

## Settings

- ExpressJS 4.18.1
- Ava 4.3.1
- Conventional Commits 17.0.3

## Hooks

- Pre commit: Conventional Commits & Lint
- Pre push: Test

### Tests

- `npm run test` to run tests on demand.

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
```

### Modes

- `npm run start` to run for production
- `npm run dev` to run for development

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
