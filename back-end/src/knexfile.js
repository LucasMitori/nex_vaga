module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "mura",
      password: "1234",
      database: "nex_vaga",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/migrations`,
    },
  },
};
