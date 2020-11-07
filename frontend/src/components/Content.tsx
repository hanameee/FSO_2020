import React from "react";
import Part from "./Part";

const Content: React.FC<{ courses: { [key: string]: number } }> = ({
    courses,
}) => (
    <div>
        {Object.entries(courses).map(([courseTitle, courseNumber]) => (
            <Part
                key={courseTitle}
                courseTitle={courseTitle}
                courseNumber={courseNumber}
            />
        ))}
    </div>
);
export default Content;
