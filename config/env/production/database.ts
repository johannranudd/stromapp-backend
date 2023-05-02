export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", true),
      },
      // ssl: {
      //   ca: env("DATABSE_CA"),
      // },
    },
    debug: false,
  },
});

// ssl: {
//   ca: env("DATABSE_CA"),
// },
