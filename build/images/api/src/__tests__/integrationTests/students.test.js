const request = require('supertest');
const express = require('express');
const app = require('../../../src/app');
const knex = require('knex');
const knexfile = require('../../../src/db/knexfile');
const appSetup = require('../../../src/index'); 

const db = knex(knexfile.development);

// const app = express();

let server;
const port = 3001;

// appSetup(app, db);



describe('Students API', () => {
  let server;

  beforeAll(async () => {
    // Initialize server and database connection if needed
    // server = app.listen(port); 
    await db.migrate.latest();
  });

  afterAll(async () => {
    // await server.close()
    await db.migrate.rollback(); 
    await db.destroy();
  });

  it('should create a new student', async () => {
    const response = await request(server)
      .post('/students')
      .send({
        name: 'John Doe',
        email: 'john@example.com'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should retrieve all students', async () => {
    const response = await request(server).get('/students');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should retrieve a student by id', async () => {
    const student = await request(server)
      .post('/students')
      .send({ name: 'Jane Doe', email: 'jane@example.com' });

    const response = await request(server).get(`/students/${student.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Jane Doe');
  });

  it('should update a student', async () => {
    const student = await request(server)
      .post('/students')
      .send({ name: 'Mark Smith', email: 'mark@example.com' });

    const response = await request(server)
      .put(`/students/${student.body.id}`)
      .send({ name: 'Mark Smith Updated', email: 'mark_updated@example.com' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Student updated');
  });

  it('should delete a student', async () => {
    const student = await request(server)
      .post('/students')
      .send({ name: 'Lisa Johnson', email: 'lisa@example.com' });

    const response = await request(server)
      .delete(`/students/${student.body.id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Student deleted');
  });
});
