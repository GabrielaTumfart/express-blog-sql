const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

// Importo router
const postsRouter = require("./routers/posts");

// Importo middleware
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");

// Registro il router con prefisso /posts
app.use("/posts", postsRouter);

// Gestisco le rotte inesistenti
app.use(notFound);

// Gestisco gli errori
app.use(errorsHandler);

const port = 3000;

app.listen(port, () => {
  console.log(`Server di Gabriela on http://localhost:${port}`);
});
