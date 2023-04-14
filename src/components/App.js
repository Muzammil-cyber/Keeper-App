import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([{ title: "Note title", content: "Note Content" }]);

  function AddNote(note) {
    setNotes(preValue => [...preValue, { title: note.title, content: note.content }]);
  }

  function DeleteNote(id) {
    setNotes(notes.filter((note, index) => { return index !== id }));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />
      {notes.map((note, index) => <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={DeleteNote}
      />)}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
