import React, { useState } from "react";
import ReactDOM from "react-dom";
import Statistics from "./components/Statistics";

export type IData = [number, number, number];

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const statisticsData: IData = [good, neutral, bad];
    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <button
                    style={{ display: "inline-block", paddingLeft: "5px" }}
                    onClick={() => setGood(good + 1)}
                >
                    good
                </button>
                <button
                    style={{ display: "inline-block", paddingLeft: "5px" }}
                    onClick={() => setNeutral(neutral + 1)}
                >
                    neutral
                </button>
                <button
                    style={{ display: "inline-block", paddingLeft: "5px" }}
                    onClick={() => setBad(bad + 1)}
                >
                    bad
                </button>
            </div>
            <h1>statistics</h1>
            {good || neutral || bad ? (
                <Statistics data={statisticsData} />
            ) : (
                " No feedback given"
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
