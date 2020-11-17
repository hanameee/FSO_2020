import React, { useState } from "react";

const Anecdotes: React.FC = () => {
    const [anecdotes, setAnecdotes] = useState<[string, number][]>([
        ["If it hurts, do it more often", 0],
        ["Adding manpower to a late software project makes it later!", 0],
        [
            "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
            0,
        ],
        [
            "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            0,
        ],
        ["Premature optimization is the root of all evil.", 0],
        [
            "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
            0,
        ],
    ]);
    const [selected, setSelected] = useState(0);
    const [currentMaxSelected, setCurrentMaxSelected] = useState(0);
    const [maxVote, setMaxvote] = useState(0);
    const clickVote = () => {
        const newAnecdotes = [...anecdotes];
        newAnecdotes[selected][1] += 1;
        if (newAnecdotes[selected][1] > maxVote) {
            setCurrentMaxSelected(selected);
            setMaxvote(newAnecdotes[selected][1]);
        }
        setAnecdotes(newAnecdotes);
    };
    return (
        <>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected][0]}</p>
            <p>has {anecdotes[selected][1]} votes</p>

            <button onClick={clickVote}>vote</button>
            <button
                onClick={() =>
                    setSelected(
                        Math.floor(
                            (Math.random() * 10) % Object.keys(anecdotes).length
                        )
                    )
                }
            >
                next anecdote
            </button>
            <h1>Anecdote with most votes</h1>
            {anecdotes[currentMaxSelected][0]}
        </>
    );
};

export default Anecdotes;
