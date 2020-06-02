import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Lista de usuários");

  response.json(["Jonathan", "Willam"]);
});

app.listen(3333);
