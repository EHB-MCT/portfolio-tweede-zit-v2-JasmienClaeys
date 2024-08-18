module.exports = function(app, db) {

// Routes for Comments
app.post('/comments', async (req, res) => {
    try {
      const { text, user_id } = req.body;
      const [id] = await db('comments').insert({ text, user_id });
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/comments', async (req, res) => {
    try {
      const comments = await db('comments').select('*');
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/comments/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await db('comments').where('id', id).first();
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put('/comments/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { text, user_id } = req.body;
      const count = await db('comments').where('id', id).update({ text, user_id });
      if (count) {
        res.status(200).json({ message: 'Comment updated' });
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete('/comments/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const count = await db('comments').where('id', id).del();
      if (count) {
        res.status(200).json({ message: 'Comment deleted' });
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};
