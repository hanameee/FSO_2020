import React from "react";
import { IData } from "../index";

const Statistics: React.FC<{ data: IData }> = ({ data }) => {
    const [good, neutral, bad] = data;
    const total = good + neutral + bad;
    const average = (good - bad) / total;
    const positive = good / total;
    return (
        <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {good + neutral + bad}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
        </>
    );
};

export default Statistics;
