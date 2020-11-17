import React from "react";
import { IData } from "../../index";
import Statistic from "./Statistic";
const Statistics: React.FC<{ data: IData }> = ({ data }) => {
    const [good, neutral, bad] = data;
    const dataMap = {
        good: good,
        neutral: neutral,
        bad: bad,
        total: good + neutral + bad,
        average: (good - bad) / (good + neutral + bad),
        positive: good / (good + neutral + bad),
    };
    return (
        <>
            {Object.entries(dataMap).map(([text, value]) => (
                <Statistic text={text} value={value} />
            ))}
        </>
    );
};

export default Statistics;
