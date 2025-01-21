# Auto CRM Backend

- Migrations required for local DB
- Each tset run the test DB is completely wiped and rebuilt

## System Requirements
- Node
- Docker

## Development

`npm install`

### Windows

- Makefile is currently only Powershell configured and should be used to run integration tests, otherwise using `npm` scripts.

#### Commands

**Makefile**
- `make test` - Starts docker containers. Transpiles code. Runs tests. Shoutsdown containers and clears `dist/` 

**NPM Scripts**
- `npm start` - Starts web server with related local DB
- `npm make-migration --name=<name>` - Creates a Sequelize empty migration file