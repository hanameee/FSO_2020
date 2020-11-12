import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
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
                <Button text="good" onClickFunction={() => setGood(good + 1)} />
                <Button
                    text="neutral"
                    onClickFunction={() => setNeutral(neutral + 1)}
                />
                <Button text="bad" onClickFunction={() => setBad(bad + 1)} />
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
