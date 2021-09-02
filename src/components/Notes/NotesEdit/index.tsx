import React, { useEffect, useState } from "react";
import http from "../../../services/api";
import { useParams, useHistory } from "react-router-dom";
import { Entry } from "../../../interfaces/entry.interface";

interface IParams { 
    entryId: string,
}

export function NotesEdit(){
    const [entry, setEntry] = useState<Entry>();
    const [entryTitle, setEntryTitle] = useState("");
    const [entryContent, setEntryContent] = useState("");

    const history = useHistory();
    const { entryId }= useParams<IParams>()

    //on button click, sets Entry title and content
    const createNote = () => {
        setEntry({title: entryTitle, content: entryContent})
    }

    useEffect(() => {
        if(entry)
            http.put(`/journals/entry/${entryId}`,entry)
                .then(response => history.goBack())
                .catch(error => console.log(error));
    },[entry])

    return (
        <>
            <div>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="title"
                    onChange={(e) => setEntryTitle(e.target.value)}
                ></input>
                <input 
                    type="text"
                    name="content" 
                    placeholder="Write your note"
                    onChange={(e) => setEntryContent(e.target.value)}
                ></input>
            </div>
            <div>
                <button onClick={createNote}>
                    Save note
                </button>
            </div>
        </>
    )
}