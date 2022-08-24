# API_Restfull-TypeScript Com TypeORM version 0.3.x

# Atualizando TypeORM com docker-compose

- docker-compose exec app bash
- npm uninstall typeorm
- npm install typeorm

# Atualizando e criando Migration no Docker-compose

- npm run typeorm -- -d(ou -dataSource) ./src/shared/infra/typeorm/index.ts migration:run
- npm run typeorm migration:create ./src/shared/infra/typeorm/migrations/(nome da migration)
