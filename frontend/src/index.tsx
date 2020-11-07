import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
    const course = "Half Stack application development";
    const courseData: { [key: string]: number } = {
        "Fundamentals of React": 10,
        "Using props to pass data": 7,
        "State of a component": 14,
    };
    return (
        <div>
            <Header course={course} />
            <Content courses={courseData} />
            <Total
                totalNumber={Object.values(courseData).reduce(
                    (cur, acc) => (acc += cur)
                )}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
