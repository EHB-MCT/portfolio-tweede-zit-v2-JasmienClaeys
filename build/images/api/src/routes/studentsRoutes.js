module.exports = function(app, db) {

    // Routes for Students
    app.post('/students', async (req, res) => {
      try {
        const { name, email } = req.body;
        const [id] = await db('students').insert({ name, email });
        res.status(201).json({ id });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.get('/students', async (req, res) => {
      try {
        const students = await db('students').select('*');
        res.status(200).json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.get('/students/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const student = await db('students').where('id', id).first();
        if (student) {
          res.status(200).json(student);
        } else {
          res.status(404).json({ message: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.put('/students/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const { name, email } = req.body;
        const count = await db('students').where('id', id).update({ name, email });
        if (count) {
          res.status(200).json({ message: 'Student updated' });
        } else {
          res.status(404).json({ message: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  
    app.delete('/students/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const count = await db('students').where('id', id).del();
        if (count) {
          res.status(200).json({ message: 'Student deleted' });
        } else {
          res.status(404).json({ message: 'Student not found' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

};