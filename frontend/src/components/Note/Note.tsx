import React from "react";

export type TNote = {
    id: number;
    content: string;
    data: string;
    important: true;
};

interface INoteProps {
    note: TNote;
    toggleImportance: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const Note: React.FC<INoteProps> = ({ note, toggleImportance }) => {
    const label = note.important ? "make not important" : "make important";

    return (
        <li className="note">
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    );
};

export default Note;
