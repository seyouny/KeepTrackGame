import React from "react";
import "./style.css";

function Card({handleClick, id, name, image}) {
  return (
    <div className="card" onClick={handleClick}>
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
