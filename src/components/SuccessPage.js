import React from "react";
import { useLocation } from "react-router-dom";


const SuccessPage = () => {
    const location = useLocation();
    const searchValue = location.state?.searchValue;
    const currentCount = location.state?.currentCount;
    
    return (
        <div>
           <p>Name: {searchValue ? searchValue: "Go back and insert your name"}</p>
           <p>Number: {currentCount ? currentCount: "Go back and insert a number"}</p>
        </div>
    )
}

export default SuccessPage