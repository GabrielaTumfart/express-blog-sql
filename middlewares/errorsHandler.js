function errorsHandler(err, req, res, next) {
  // stampo l'errore nel terminale
  console.log("[ERROR]: " + err.message);

  // rispondo con status 500 e un messaggio di errore
  res.status(500).json({
    message: "Internal server error",
    success: false,
  });
}

module.exports = errorsHandler;
