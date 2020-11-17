import React from "react";
import { ICourse } from "../../index";

const Header: React.FC<{ courseData: ICourse }> = ({ courseData }) => {
    return <h1>{courseData.name}</h1>;
};

export default Header;
