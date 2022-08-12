import React from "react";

const Button = (props) => {
    return(
        <button className="download text-gray-800 hover:text-gray-500 duration-500">
            <i className="fa-solid fa-cloud-arrow-down pr-2 text-md"></i>
            {props.children}
        </button>
    );
};

export default Button;