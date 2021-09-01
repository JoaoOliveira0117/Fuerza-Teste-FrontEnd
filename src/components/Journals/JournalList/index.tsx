import React, { useEffect, useState } from "react";
import http from "../../../services/api";
import { Link, useRouteMatch} from "react-router-dom";
import { User } from "../../../interfaces/user.interface";
import { Journal } from "../../../interfaces/journal.interface";

import EmptyStateImg from '../../../assets/EmptyStateImg.svg';

interface UserProps extends User {}

export function JournalList(props: { user: UserProps | undefined}){
    const [userJournals,setUserJournals] = useState<Journal[]>([]);
    let { path } = useRouteMatch();

    // list user Journals on page load.
    useEffect(() => {
        //check if user is authenticated || check if user exists
        if(props.user?.id !== undefined){
            http.get(`/journals/${props.user?.id}`)
                .then(response => {
                    let {journals} = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Journals object.
                    setUserJournals(journals);
                });
        }
    },[]);

    return (
        <>
            <div>
                <div>
                    <img src={EmptyStateImg} alt="Empty"></img>
                </div>
                <ul>
                { userJournals.map((journal: Journal) => // Generates a link to the journal with ID and Title (as URL params)
                    <li key={journal.id}>
                        <Link to={`${path}/${journal.id}?title=${journal.title}`}>
                            {journal.title}
                        </Link>
                    </li>
                )}
                </ul>
                <div>
                    <Link to={`${path}/create`}>Create a journal</Link>
                </div>
            </div>
        </>
    );
}