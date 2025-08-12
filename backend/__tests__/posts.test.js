const request = require('supertest');
const express = require('express');
const cors = require('cors');

let app;
let posts;

beforeEach(() => {
  posts = [];
  app = express();
  app.use(cors());
  app.use(express.json());
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
});

test('Crear un post válido', async () => {
  const res = await request(app)
    .post('/api/posts')
    .send({ message: 'Hola ESPE!' });
  expect(res.statusCode).toBe(201);
  expect(res.body.message).toBe('Hola ESPE!');
});

test('Rechaza post de más de 280 caracteres', async () => {
  const longMsg = 'a'.repeat(281);
  const res = await request(app)
    .post('/api/posts')
    .send({ message: longMsg });
  expect(res.statusCode).toBe(400);
});
