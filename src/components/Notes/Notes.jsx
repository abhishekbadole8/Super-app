import React, { useState } from "react";
import Styles from "../Notes/Notes.module.css"

function Notes() {

    const [notes, setNotes] = useState("")

    const handelChange = (e) => {
        setNotes(e.target.value)
        localStorage.setItem("notesText", JSON.stringify(notes))
    }

    return (

        <div className={Styles.notesContainer}>
            <h4>All notes</h4>
            <textarea name="" placeholder="Start Typing Here..." cols="30" rows="10" onChange={handelChange}>

            </textarea>
            <div className={Styles.pencilContainer}>
                {/* <div className={Styles.pencil}></div> */}
                <img src="/images/pencil.png" alt="" />
            </div>
        </div>

    )
}
export default Notes;