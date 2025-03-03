async function initRoutesWeb(app) {
  app.get("/", (req, res) => {
    res.send("Toto");
  });
}

export { initRoutesWeb };