import React from "react";

const Part: React.FC<{ courseTitle: string; courseNumber: number }> = ({
    courseTitle,
    courseNumber,
}) => {
    return (
        <p key={courseTitle}>
            {courseTitle} {courseNumber}
        </p>
    );
};

export default Part;
