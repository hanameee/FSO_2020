import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

export interface ICourseData {
    name: string;
    exercises: number;
}

export interface ICourse {
    name: string;
    parts: ICourseData[];
}
const App = () => {
    const course: ICourse = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ],
    };
    return (
        <div>
            <Header courseData={course} />
            <Content courseData={course} />
            <Total courseData={course} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
