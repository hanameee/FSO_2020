import React from "react";
import ReactDOM from "react-dom";
import Anecdotes from "./components/Anecdotes/Anecdotes";

export type IData = [number, number, number];

const App = () => {
    return <Anecdotes />;
};

ReactDOM.render(<App />, document.getElementById("root"));
