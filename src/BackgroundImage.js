import React from 'react';
import graph from "./graph.png";

const BackgroundImage = () => {
  return (
    <div className="graph">
       <img src={graph} className="graph__image" alt="graph" />
       <div className="graph__text">
        <h2>Choose a date range</h2>
        <h5 className="graph__hp">Lorem ipsum dolor sit amet,consectetur</h5>
        <h5 className="graph__hp">adipiscing elit. Mauris imperdiet bibendum</h5>
       </div>
    </div>
  )
}

export default BackgroundImage;