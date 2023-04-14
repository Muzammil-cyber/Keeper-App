import { useState } from "react";

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";

function CreateArea(props) {

    const [isExpanded, setIsExpaned] = useState(false);
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
        setIsExpaned(false);
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" placeholder="Title" onChange={HandleChange} value={newNote.title} />}
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={HandleChange} value={newNote.content} onClick={() => setIsExpaned(true)} />
                <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
