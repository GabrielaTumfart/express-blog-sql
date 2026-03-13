let posts = require("../data/posts");

// Index - GET /posts/ - Restituisce la lista di tutti i post in formato JSON
function index(req, res) {
  //throw new Error("Custom error");
  const responseData = {
    result: posts,
    message: "Lista dei post di Gabriela",
    success: true,
  };
  res.json(responseData);
}

// Show - GET /posts/:id - Restituisce un singolo post in formato JSON
function show(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res.status(404).json({
      message: `Errore 404 - Post ${postId} non trovato`,
      success: false,
    });
  }

  // Se il post non esiste risponde con errore 404
  const responseData = {
    result: post,
    message: `Dettaglio del post ${postId}`,
    success: true,
  };
  res.json(responseData);
}
// Milestone 3 inizia qui:
// Store - POST /posts/ - Creazione di un nuovo post
function store(req, res) {
  console.log(req.body);

  const { title, content, image, tags } = req.body;

  // Creo un nuovo id incrementando l'ultimo id presente
  const newId = posts[posts.length - 1].id + 1;

  // Creo un nuovo oggetto post
  const newPost = {
    id: newId,
    title,
    content,
    image,
    tags,
  };

  // Aggiungo il nuovo post all'array
  posts.push(newPost);

  // Controllo
  console.log(posts);

  // Restituisco status 201 e il post appena creato
  res.status(201).json(newPost);
}

// Update
// Update - PUT /posts/:id - Modifica intera di un post
function update(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  // Bonus - Se il post non esiste risponde con ERRORE 404
  if (!post) {
    return res.status(404).json({
      message: `ERRORE 404 - Post ${postId} non trovato`,
      success: false,
    });
  }

  // Aggiorniamo tutti i campi del post // Milestone 4
  post.title = req.body.title;
  post.content = req.body.content;
  post.image = req.body.image;
  post.tags = req.body.tags;

  const responseData = {
    result: post,
    message: `Modifica intera del post ${postId}`,
    success: true,
  };

  res.json(responseData);
}

// Modify - PATH /posts/:id - Modifica parziale di un post
function modify(req, res) {
  const postId = parseInt(req.params.id);
  const responseData = {
    message: `Modifica parziale del post ${postId}`,
    success: true,
  };
  res.json(responseData);
}

// Destroy - DELETE /posts/:id - Eliminazione di un post
function destroy(req, res) {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  // BONUS - Se il post non esiste risponde con errore 404
  if (!post) {
    return res.status(404).json({
      message: `Errore 404 - Post ${postId} non trovato`,
      success: false,
    });
  }

  // Rimuoviamo il post dalla lista con filter
  posts = posts.filter((post) => post.id !== postId);

  // Stampiamo la lista aggiornata nel terminale
  console.log("Lista aggiornata:", posts);

  // Rispondiamo con status 204 e nessun contenuto
  res.status(204).send();
}
module.exports = { index, show, store, update, modify, destroy };

//! Su Postman eseguo e seguenti test:

// Milestone 1: tutte le rotte rispondono correttamente

// Milestone 2: index e show restituiscono JSON correttamente

// Bonus: testo il 404

// Milestone 2: Testo destroy

// Bonus: testo il bonus 404 su update
