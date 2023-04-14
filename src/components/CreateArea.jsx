import { useState } from "react";

function CreateArea(props) {

    const [newNote, setNewNote] = useState({ title: "", content: "" });

    function HandleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setNewNote({ ...newNote, [name]: value });
    }
    function submitNote(e) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                <input name="title" placeholder="Title" onChange={HandleChange} value={newNote.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={HandleChange} value={newNote.content} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
