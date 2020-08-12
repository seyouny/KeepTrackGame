import React from "react";
import "./style.css";

function Card({name, id, handleClick, image}) {
  return (
    <div className="card" onClick={(event) => handleClick(event.target.id)}>
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
