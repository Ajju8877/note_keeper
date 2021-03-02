import React, {useState} from "react";
import "./App.css";
import Header from "./Header.js";
import Note from "./Note.js";
import Footer from "./Footer.js";
import CreateArea from "./CreateArea.js";

function createNotes(noteItem) {
  
}

function App() {
  
  const [notes,setNotes] = useState([])
  function addNote(note) {
    setNotes(prevNotes => {
return [...prevNotes,note];
    })
  }
  
  return (
    <div className="app">
      <div className="app_body">
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map(noteItem => {
           return <Note title={noteItem.title} content={noteItem.content} />
        })}
        <Footer />
      </div>
    </div>
  );
}
export default App;
