import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export interface ICourseData {
    name: string;
    exercises: number;
    id: number;
}
export interface ICourse {
    id: number;
    name: string;
    parts: ICourseData[];
}

const Course: React.FC<{ courseData: ICourse }> = ({ courseData }) => (
    <>
        <Header courseData={courseData} />
        <Content courseData={courseData} />
        <Total courseData={courseData} />
    </>
);
export default Course;
