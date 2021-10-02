const { Pool } = require("pg");

const client = new Pool({
  database: "TesteComuniKane",
  server: "localhost",
  user: "postgres",
  password: "lgr140795$",
  port: 5432,
});

export default client;
