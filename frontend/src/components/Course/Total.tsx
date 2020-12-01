import React from "react";
import { ICourse } from "./Course";

const Total: React.FC<{ courseData: ICourse }> = ({ courseData }) => {
    const totalNumber = courseData.parts.reduce(
        (cur, acc) => (acc.exercises += cur),
        0
    );
    console.log(courseData, totalNumber);
    return (
        <p>
            <b>total of {totalNumber} exercises</b>
        </p>
    );
};

export default Total;
