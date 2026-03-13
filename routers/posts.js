const express = require("express");

const router = express.Router();
const postsController = require("../controllers/postsController");
const noBug = require("../middlewares/noBug");

// Index - GET /posts/ - Lista di tutti i post
router.get("/", postsController.index);

// Show - GET /posts/:id - Dettaglio di un singolo post
router.get("/:id", postsController.show);

// Store - POST /posts/ - Creazione di un nuovo post
//router.post("/", postsController.store);
router.post("/", noBug, postsController.store);

// Update - PUT /posts/:id - Modifica intera di un post
//router.put("/:id", postsController.update);
router.post("/:id", noBug, postsController.update);

// Modify - PATCH /posts/:id - Modifica parziale di un post
router.patch("/:id", postsController.modify);

// Destroy - DELETE /posts/:id - Cancellazione di un post
router.delete("/:id", postsController.destroy);

module.exports = router;

// Milestone 3: test: testo store su Postman, nuovo post creato con status 201 e funziona corretamente

// test: testato middleware notFound su Postman, risponde con status 404

// test: testato middleware errorsHandler su Postman, risponde con status 500

// test: testo middleware noBug su Postman, funziona correttamente
