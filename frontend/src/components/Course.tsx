import React from "react";
import { ICourse } from "../index";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course: React.FC<{ courseData: ICourse }> = ({ courseData }) => (
    <>
        <Header courseData={courseData} />
        <Content courseData={courseData} />
        <Total courseData={courseData} />
    </>
);
export default Course;
