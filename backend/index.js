const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let posts = [];

app.post('/api/posts', (req, res) => {
  const { message } = req.body;
  if (!message || message.length > 280) {
    return res.status(400).json({ error: 'Mensaje inválido (máx 280 caracteres)' });
  }
  const post = {
    id: Date.now(),
    message,
    createdAt: new Date().toISOString()
  };
  posts.unshift(post);
  res.status(201).json(post);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
