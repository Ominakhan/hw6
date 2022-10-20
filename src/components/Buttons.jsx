import React, { useState } from "react";

const Buttons = () => {
const [num, setNum] = useState(0);

const incNum = () =>{
    setNum(num + 1)
};

const decNum = () =>{
    if(num > 0) {
        setNum(num - 1)
    }else {
        setNum(0);
    }
  }

  
    return(
        <div>
            <div className="main-div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <button onClick={incNum}> Increase </button>
                        <button onClick={decNum}> Decrease </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Buttons;