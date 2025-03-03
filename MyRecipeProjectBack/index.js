import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

import { initRoutes } from "./routes/routes.js";
import { initDatabase } from "./db.js";
const app = express();
const port = 3000;

// Middleware pour parser JSON
app.use(express.json());
app.use(cors());

// Route par défaut

// Démarre le serveur
app.listen(port, () => {
  console.log(`Serveur Node.js démarré sur http://localhost:${port}`);
});

async function start() {
  await initRoutes(app);
}



(async () => {
  await start();
})();
