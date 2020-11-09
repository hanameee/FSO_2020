import React from "react";
import { ICourse } from "../index";

const Total: React.FC<{ courseData: ICourse }> = ({ courseData }) => {
    const totalNumber = courseData.parts.reduce(
        (cur, acc) => (acc.exercises += cur),
        0
    );
    return <p>Number of exercises {totalNumber}</p>;
};

export default Total;
