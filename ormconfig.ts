import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/**/*.ts'],
});

//  migration:run       npx typeorm-ts-node-commonjs migration:run -d ./ormconfig.ts
//  migration:revert    npx typeorm-ts-node-commonjs migration:revert -d ./ormconfig.ts
//  migration:generate  npx typeorm-ts-node-commonjs migration:generate src/migrations/PostRefactor -d ./ormconfig.ts
//  migration:create    npx typeorm-ts-node-commonjs migration:create  src/migrations/PostRefactor
