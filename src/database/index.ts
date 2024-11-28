import { DataSource } from "typeorm";

/* Base connection of the database */
export const dataSource = new DataSource({
  type: "postgres",
  host: "127.0.0.1",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "notes",
  entities: ["../entities/*.ts"],
  migrations: ["./migrations/**"],
  logging: true,
  synchronize: true
})