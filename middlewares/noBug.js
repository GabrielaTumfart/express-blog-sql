function noBug(req, res, next) {
  //recupero il titolo dal body della richiesta
  const { title } = req.body;

  // se il titolo contiene la parola bug
  if (title && title.toLowerCase().includes("bug")) {
    // rispondo con errore 422
    return res.status(422).json({
      message: "Il totolo non può contenere la parola bug",
      success: false,
    });
  }

  // se il titolo è valido, si passa al prossimo middleware usando next come ci ha insegnato Tiz
  next();
}

module.exports = noBug;
