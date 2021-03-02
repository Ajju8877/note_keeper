import React, { useState } from "react";
import "./CreateArea.css";

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    
  }

  return (
    <div className="createArea">
      <div>
        <form>
          <input name="title" onChange={handleChange} placeholder="Title" /> <br />
          <textarea name="content" onChange={handleChange} placeholder="Create Note" /> <br />
          <button onClick={submitNote}> Add Note </button>
        </form>
      </div>
    </div>
  );
}
