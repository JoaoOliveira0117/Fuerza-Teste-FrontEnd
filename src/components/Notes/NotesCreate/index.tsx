import React, { useEffect, useState } from "react";
import http from "../../../services/api";
import { useParams, useHistory } from "react-router-dom";
import { Entry } from "../../../interfaces/entry.interface";

interface IParams { id: string; }

export function NotesCreate(){
    const [entry, setEntry] = useState<Entry>();
    const [entryTitle, setEntryTitle] = useState("");
    const [entryContent, setEntryContent] = useState("");

    const history = useHistory();
    const { id } = useParams<IParams>()

    //on button click, sets Entry title and content
    const createNote = () => {
        setEntry({title: entryTitle, content: entryContent})
    }

    //at the moment an entry is created, it is sended to the api
    useEffect(() => {
        if(entry)
            http.post(`/journals/entry/${id}`,entry)
                .then(response => console.log(response))
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
                    Create note
                </button>
            </div>
        </>
    )
}