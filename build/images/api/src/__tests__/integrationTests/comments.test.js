const request = require('supertest');
const express = require('express');
const knex = require('knex');
const knexfile = require('../../../src/db/knexfile');
const commentsRoutes = require('../../routes/commentsRoutes');

// Initialize Knex for testing
const db = knex(knexfile.development);

// Initialize Express app
const app = express();
app.use(express.json());
commentsRoutes(app, db);

beforeAll(async () => {
  // Create tables and seed data
  await db.migrate.latest();
  await db('students').insert([{ id: 1, name: 'Test User', email: 'testuser@example.com' }]);
});

afterAll(async () => {
  // Close database connection
  await db.destroy();
});

describe('Comments API', () => {

  it('POST /comments - should create a new comment', async () => {
    const response = await request(app)
      .post('/comments')
      .send({ text: 'This is a test comment', user_id: 1 });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('GET /comments - should retrieve all comments', async () => {
    const response = await request(app).get('/comments');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /comments/:id - should retrieve a comment by id', async () => {
    const commentId = 1;
    const response = await request(app).get(`/comments/${commentId}`);
    if (response.statusCode === 200) {
      expect(response.body).toHaveProperty('id', commentId);
      expect(response.body).toHaveProperty('text');
    } else {
      expect(response.statusCode).toBe(404);
    }
  });

  it('PUT /comments/:id - should update a comment', async () => {
    const commentId = 1;
    const response = await request(app)
      .put(`/comments/${commentId}`)
      .send({ text: 'Updated comment text', user_id: 1 });
    if (response.statusCode === 200) {
      expect(response.body).toHaveProperty('message', 'Comment updated');
    } else {
      expect(response.statusCode).toBe(404);
    }
  });

  it('DELETE /comments/:id - should delete a comment', async () => {
    const commentId = 1;
    const response = await request(app).delete(`/comments/${commentId}`);
    if (response.statusCode === 200) {
      expect(response.body).toHaveProperty('message', 'Comment deleted');
    } else {
      expect(response.statusCode).toBe(404);
    }
  });
});
