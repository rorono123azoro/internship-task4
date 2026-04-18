const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  }
];

// Utility function to generate new IDs
const generateId = () => {
  return users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
};

// ==========================================
// CRUD Endpoints for Users
// ==========================================

// 1. CREATE (POST /api/users)
app.post('/api/users', (req, res) => {
  const { name, email, age } = req.body;
  
  if (!name || !email || !age) {
    return res.status(400).json({ error: 'Name, email, and age are required.' });
  }

  const newUser = {
    id: generateId(),
    name,
    email,
    age
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// 2. READ ALL (GET /api/users)
app.get('/api/users', (req, res) => {
  res.json(users);
});

// 3. READ ONE (GET /api/users/:id)
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  
  res.json(user);
});

// 4. UPDATE (PUT /api/users/:id)
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email, age } = req.body;
  
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }
  
  // Update fields if provided in request
  const updatedUser = {
    ...users[userIndex],
    name: name !== undefined ? name : users[userIndex].name,
    email: email !== undefined ? email : users[userIndex].email,
    age: age !== undefined ? age : users[userIndex].age,
  };
  
  users[userIndex] = updatedUser;
  res.json(updatedUser);
});

// 5. DELETE (DELETE /api/users/:id)
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found.' });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  res.json({ message: 'User deleted successfully', deletedUser });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
