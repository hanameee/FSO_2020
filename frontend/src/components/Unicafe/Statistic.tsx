import React from "react";

const Statistic: React.FC<{ text: String; value: number }> = ({
    text,
    value,
}) => {
    return (
        <p>
            {text} {value}
        </p>
    );
};

export default Statistic;
