import React, { useEffect, useState } from "react";
import http from "../../services/api";
import { Link, useRouteMatch, useParams } from "react-router-dom";
import { Entry } from "../../interfaces/entry.interface";
import { Journal } from "../../interfaces/journal.interface";

import EmptyStateImg from "../../assets/EmptyStateImg.svg";

interface IParams { id: string; }

interface Entries {
    entries: Entry[]
}

export function NotesList(){
    const [journal, setJournal] = useState<Journal>(); // get context Journal from api
    const [journalEntries, setJournalEntries] = useState<Entries>(); // get Journal's entries from api
    const [editMode, setEditMode] = useState<boolean>(false); // editMode State
    const [journalTitle, setJournalTitle] = useState<string | undefined>(""); // Journal Title State

    const { id } = useParams<IParams>()
    let { url } = useRouteMatch();

    const toggleEditMode = () => {
        if(editMode === false) 
            setEditMode(!editMode);
    }

    async function saveTitle(e: any) {
        await http.put(`/journals/${id}`, {title: e.target.value})
            .then(response => {
                let journal = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Journal object.
                setJournal(journal);
            })
            .then(response => setEditMode(!editMode));
    }

    //when component loads, get the journal.
    useEffect(() => {
        http.get(`/journals/one/${id}`)
            .then(response => {
                let {journal} = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Journal object.
                setJournal(journal);
            });
    },[]);

    //if it finds the journal, get entries.
    useEffect(() => {
        http.get(`/journals/entries/${id}`)
            .then(response => {
                let { entries } = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Entries object.
                setJournalEntries({entries});
            });
        
        setJournalTitle(journal?.title)
    },[journal])

    return (
        <>
            <div>
                <div onClick={toggleEditMode}>
                    {!editMode ? // if user is in editMode, it will show the input, else, it will show the text
                        <h1>{journal?.title}</h1> :
                        <input type="text" 
                            value={journalTitle} 
                            onChange={(e) => setJournalTitle(e.target.value)}
                            onBlur={(e) => saveTitle(e)}
                            onKeyDown={(e) => { // if user clicks outside the input or press enter, edit mode will be set to
                                if(e.key === 'Enter')
                                    saveTitle(e)
                            }} 
                        ></input>
                    }
                </div>
                <div>
                    <img src={EmptyStateImg} alt="Empty"></img>
                </div>
                { journalEntries?.entries.map((entry: Entry) => //on click, sends user to entry editing page by url fulfilled with parameters.
                    <Link to={`${url}/${entry.id}`} key={entry.id}> 
                        <div>
                            <p>
                                {entry.title}
                            </p>
                            <p> 
                                {entry.content}
                            </p>
                        </div>
                    </Link>
                )}
                <div>
                    <Link to={`${url}/create`}>Save note</Link>
                </div>
            </div>
        </>
    )
}