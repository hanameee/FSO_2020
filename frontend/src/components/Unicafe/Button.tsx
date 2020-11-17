import React from "react";

const Button: React.FC<{
    text: string;
    onClickFunction: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}> = ({ text, onClickFunction }) => {
    return (
        <button
            style={{ display: "inline-block", paddingLeft: "5px" }}
            onClick={onClickFunction}
        >
            {text}
        </button>
    );
};

export default Button;
