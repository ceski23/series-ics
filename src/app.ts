import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const ids = Array.isArray(req.query.series) ? req.query.series : [req.query.series].filter(Boolean);

  res.setHeader('Content-Type', 'application/json');
  res.send(ids);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});