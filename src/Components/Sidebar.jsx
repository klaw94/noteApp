import React from "react"

export default function Sidebar(props) {


    const noteElements = props.notes.map((note) => {
        const bodyJson = JSON.stringify(note.body);
        const nPosition = bodyJson.indexOf("/n");
        const title = note.body.slice(0, nPosition)
        return (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{title}</h4>
            </div>
        </div>
    )}
    )

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}