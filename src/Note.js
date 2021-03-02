import React from "react";
import "./Note.css";

export default function Note(props) {
  return (
    <div className="main">
      <div className="notes">
        <h3>{props.title} </h3> <hr />
        <p> {props.content} </p>
      </div>
    </div>
  );
}
