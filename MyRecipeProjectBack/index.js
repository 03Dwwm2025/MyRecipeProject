import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

// Middleware pour parser JSON
app.use(express.json());
app.use(cors())

// Route par défaut
app.get('/', (req, res) => {
    res.send('Serveur Node.js opérationnel !');
});

// Démarre le serveur
app.listen(port, () => {
    console.log(`Serveur Node.js démarré sur http://localhost:${port}`);
});
