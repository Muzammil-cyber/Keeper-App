import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Zoom } from '@mui/material';

export default function Note(props) {

    return (
        <Zoom in={true} >
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={() => { props.onDelete(props.id); }}>
                    <DeleteForeverIcon />
                </button>
            </div>
        </Zoom>
    )
}