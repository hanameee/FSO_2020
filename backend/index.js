const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

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

app.delete("/api/persons/:id", (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter((person) => person.id !== id);
    res.status(204).end();
});

app.post("/api/persons", (req, res) => {
    const generateId = () => Math.floor(Math.random() * 10000);
    const body = req.body;
    if (!body.name) {
        return res.status(400).json({
            error: "name field missing",
        });
    } else if (!body.number) {
        return res.status(400).json({
            error: "number field missing",
        });
    } else if (persons.find((person) => person.name === body.name)) {
        return res.status(400).json({
            error: "name must be unique",
        });
    }
    const newPerson = {
        name: body.name,
        number: body.number,
        id: generateId(),
    };
    persons = persons.concat(newPerson);
    res.json(newPerson);
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
