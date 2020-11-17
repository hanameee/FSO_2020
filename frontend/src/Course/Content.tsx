import React from "react";
import Part from "./Part";
import { ICourse } from "../../index";

const Content: React.FC<{ courseData: ICourse }> = ({ courseData }) => (
    <div>
        {courseData.parts.map(({ name, exercises }) => (
            <Part key={name} courseTitle={name} courseNumber={exercises} />
        ))}
    </div>
);
export default Content;
