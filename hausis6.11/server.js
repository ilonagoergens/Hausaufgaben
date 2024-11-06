import express from 'express';

const app = express();
const port = 5678;
//Daten
let items = [
  { id: 1, name: 'T-Shirt', quantity: 50 },
  { id: 2, name: 'Sneakers', quantity: 20 }
];
//Middleware
app.use(express.json());
//Get All
app.get('/api/items', (req, res) => {
  res.json(items);
});
//Get By Id
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Artikel nicht gefunden' });
  }

  res.json(item);
});
//Post Item
app.post('/api/items', (req, res) => {
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ error: 'Name und Menge sind erforderlich' });
  }

  const newItem = {
    id: items.length + 1,
    name,
    quantity
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`API läuft auf http://localhost:${port}`);
});
