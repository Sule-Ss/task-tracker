import React from "react";

function Button({handleClick, color, text}) {
    /* const handleClick = () =>{
        console.log("Click with handle");
    } */
  return (
    <div>
      <button
      className="btn"
        style={{ backgroundColor: color }}
        onClick={handleClick}

      >
       {text}
      </button>
    </div>
  );
}

export default Button;
