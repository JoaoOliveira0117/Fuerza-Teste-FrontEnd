import React, { useEffect, useState } from "react";
import http from "../../services/api";
import { Link, useRouteMatch, useParams, useLocation } from "react-router-dom";
import { Entry } from "../../interfaces/entry.interface";

import EmptyStateImg from "../../assets/EmptyStateImg.svg";

interface IParams { id: string; }

interface Entries {
    entries: Entry[]
}

export function NotesList(){
    const [journalEntries, setJournalEntries] = useState<Entries>();
    const { id } = useParams<IParams>()
    let { url } = useRouteMatch();

    //function that searches for URL params.
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {
        http.get(`/journals/entries/${id}`)
            .then(response => {
                let { entries } = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Entries object.
                setJournalEntries({entries});
            });
    },[])

    return (
        <>
            <div>
                    {useQuery().get("title")}
                <div>
                    <img src={EmptyStateImg} alt="Empty"></img>
                </div>
                { journalEntries?.entries.map((entry: Entry) => 
                    <p key={entry.id}>
                        {entry.title}
                    </p>
                )}
                <div>
                    <Link to={`${url}/create`}>Create a note</Link>
                </div>
            </div>
        </>
    )
}