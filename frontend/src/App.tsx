import React, { useState, useEffect } from "react";
import Note from "./components/Note/Note";
import Notification from "./components/Note/Notification";
import { getAll, create, update } from "./services/notes";
import { TNote } from "./components/Note/Note";

const App = () => {
    const [notes, setNotes] = useState<TNote[]>([]);
    const [newNote, setNewNote] = useState("");
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        getAll().then((initialNotes) => {
            setNotes(initialNotes);
        });
    }, []);

    const addNote = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() > 0.5,
            id: notes.length + 1,
        };

        create(noteObject).then((returnedNote) => {
            setNotes(notes.concat(returnedNote));
            setNewNote("");
        });
    };

    const toggleImportanceOf = (id: number) => {
        const url = `http://localhost:3001/notes/${id}`;
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note?.important };

        update(id, changedNote)
            .then((returnedNote) => {
                setNotes(
                    notes.map((note) => (note.id !== id ? note : returnedNote))
                );
            })
            .catch((error) => {
                setErrorMessage(
                    `Note '${note?.content}' was already removed from server`
                );
                setTimeout(() => {
                    setErrorMessage("");
                }, 5000);
            });
    };

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewNote(event.target.value);
    };

    const notesToShow = showAll
        ? notes
        : notes.filter((note) => note.important);

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map((note, i) => (
                    <Note
                        key={i}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
        </div>
    );
};

export default App;
