import React from "react";

export function NotesCreate(){
    return (
        <>
            <div>
                <input type="text" name="title" placeholder="title"></input>
                <input type="text" name="note" placeholder="Write your note"></input>
            </div>
        </>
    )
}