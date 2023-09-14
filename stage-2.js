const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Sample data (you can replace this with your database)
const persons = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
];

app.use(bodyParser.json());

// Create a new person
app.post("/api/persons", (req, res) => {
  const { name, age } = req.body;

  // Generate a unique ID (you can use a library like uuid)
  const id = persons.length + 1;

  const newPerson = { id, name, age };
  persons.push(newPerson);

  res.status(201).json(newPerson);
});

// Get all persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// Get a specific person by ID
app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const person = persons.find((p) => p.id === parseInt(id));

  if (!person) {
    res.status(404).json({ message: "Person not found" });
  } else {
    res.json(person);
  }
});

// Update a specific person by ID
app.put("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const personIndex = persons.findIndex((p) => p.id === parseInt(id));

  if (personIndex === -1) {
    res.status(404).json({ message: "Person not found" });
  } else {
    const updatedPerson = { id: parseInt(id), name, age };
    persons[personIndex] = updatedPerson;

    res.json(updatedPerson);
  }
});

// Delete a specific person by ID
app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const personIndex = persons.findIndex((p) => p.id === parseInt(id));

  if (personIndex === -1) {
    res.status(404).json({ message: "Person not found" });
  } else {
    persons.splice(personIndex, 1);
    res.status(204).send(); // No content
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
