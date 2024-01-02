import React from "react";
import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <>
        <div style={{ paddingTop: '40px' }}>
        <div className="setStyle2">
            <h1> 404 Error page</h1>
            <p>sorry this page doesn't exist</p>
            <NavLink to="/Products">Go Back</NavLink>
        </div>
        </div>
        </>
    );
};
export default Error;