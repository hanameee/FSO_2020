import React from "react";

const Total: React.FC<{ totalNumber: number }> = ({ totalNumber }) => {
    return <p>Number of exercises {totalNumber}</p>;
};

export default Total;
