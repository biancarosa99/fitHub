import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "fithub",
  entities: ["src/entities/**/*.ts"],
  logging: true,
  synchronize: true,
});
