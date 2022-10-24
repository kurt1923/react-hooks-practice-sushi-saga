import React from "react";

function Sushi({sushi, handleEatenSushi}) {
  const {name, price, img_url, eaten} = sushi

  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatenSushi(sushi)}>
       
        {eaten ? null : (
          <img
            src={img_url}
            alt="Sushi Pic"
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
