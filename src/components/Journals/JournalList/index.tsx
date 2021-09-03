import React, { useEffect, useState } from "react";
import http from "../../../services/api";
import { Link, useRouteMatch} from "react-router-dom";
import { User } from "../../../interfaces/user.interface";
import { Journal } from "../../../interfaces/journal.interface";
import { Button, Container } from "./styles";

import EmptyStateImg from '../../../assets/EmptyStateImg.svg';
import JournalCoverLight from "../../../assets/JournalCoverLight.svg";
import JournalCoverDark from "../../../assets/JournalCoverDark.svg";

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
            <Container>
                {/* //if user has journals, render button at the top of the page */}
                {userJournals.length !== 0 ? 
                    <Button>
                        <Link to={`${path}/create`}>+ Add journal</Link>
                    </Button> 
                : ''}
                <div className="content-wrapper">
                    {userJournals.length !== 0 ? //if user has journals, return them
                        <div className="journals-wrapper">
                            {userJournals.map((journal: Journal) => // Generates a link to the journal with ID and Title (as URL params)
                                <Link to={`${path}/${journal.id}`} key={journal.id}>
                                    <div className="journal-box">
                                        <div className="journal">
                                            <div className="journal-image">
                                                {/* Checks if journal is odd/even and selects the journalCover accordingly */}
                                                <img src={(Number(journal.id) % 2) === 1 ? JournalCoverLight : JournalCoverDark} alt="journal"></img>
                                            </div>
                                            <p className={`journal-title ${(Number(journal.id) % 2) === 1 ? "light" : "dark"}`}>{journal.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                        : //else, return empty message.
                        <>
                            <div className="empty-image">
                                <img src={EmptyStateImg} alt="Empty"></img>
                            </div>
                            <div className="link">
                                <Link to={`${path}/create`}>Create a journal</Link>
                            </div>
                        </>
                    }     
                </div>
            </Container>
        </>
    );
}