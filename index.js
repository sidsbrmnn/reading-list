require("dotenv").config();

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  require("./services/db")();
  if (process.env.NODE_ENV === "production") require("./services/prod")(server);
  require("./services/routes")(server);

  server.get("*", (req, res) => {
    handle(req, res);
  });

  const PORT = process.env.PORT;
  server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
