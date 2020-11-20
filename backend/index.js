const express = require("express");
const app = express();

let persons = [
    { id: 1, name: "Hannah", number: "100" },
    { id: 2, name: "Jeongho", number: "200" },
];

app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

app.get("/api/persons", (req, res) => {
    res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find((person) => person.id === id);
    person ? res.json(person) : res.status(404).end();
});

app.get("/info", (req, res) => {
    res.send(
        `<h1>Phonebook has info for ${
            persons.length
        } people</h1><p>${new Date()}</p>`
    );
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
