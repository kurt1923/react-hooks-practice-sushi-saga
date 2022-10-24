import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, nextSushis, handleEatenSushi }) {


  return (
    <div className="belt">
      {sushis
        .map((sushi) => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            handleEatenSushi={handleEatenSushi}
          />
        ))}
      <MoreButton nextSushis={nextSushis}/>
    </div>
  );
}

export default SushiContainer;
