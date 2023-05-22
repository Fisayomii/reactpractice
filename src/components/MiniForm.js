import React, { useState } from "react";
import { Link } from "react-router-dom";

const MiniForm = (props) => {
    
    const [currentCount, setCurrentCount] = useState(0)
    
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    } 
    
    const [searchValue, setSearchValue] = useState("")
    
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick = () => {
        setSearchValue("")
    }

    const shouldDisplayButton = searchValue.length > 0

    return (
        <div>
            <button 
                onClick={handleClick}>+ {props.incrementBy}
            </button>
            <div>{currentCount}</div>
            <div>
                <input type="text" value={searchValue} onChange={handleInputChange}/>
                
                {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}

            </div>
            <div>
                <button disabled={!searchValue }>
                    <Link to= "/success"  state= {{searchValue : searchValue , currentCount: currentCount}}>
                        Submit
                    </Link>
                </button>
            </div>
        </div>
        
    )
}

export default MiniForm 