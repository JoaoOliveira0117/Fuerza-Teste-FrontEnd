import React, { useEffect, useState } from "react";
import http from "../../services/api";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../interfaces/user.interface";
import { NotesList } from "../Notes";
import { NotesCreate } from "../Notes/NotesCreate";
import { NotesEdit } from "../Notes/NotesEdit";
import { JournalCreate } from "./JournalCreate";
import { JournalList } from "./JournalList";
import { Background, Container } from "./styles";

import LogoImg from "../../assets/LogoImg.svg"
import BackgroundImg from "../../assets/BackgroundImg.svg";

export function Journals(){
    const [user,setUser] = useState<User>();
    const [hasJournals, setHasJournals] = useState<boolean>();
    let { path } = useRouteMatch();

    // get actual user from local storage
    useEffect(() => {
        let { user } = JSON.parse(localStorage.getItem("@user")!);
        setUser(user);
    },[]);

    useEffect(() => {
        //check if user is authenticated || check if user exists
        //proceeds to check if a journal exists.
        if(user?.id !== undefined){
            http.get(`/journals/${user?.id}`)
                .then(response => {
                    let {journals} = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a journals JSON.
                    setHasJournals(journals.length === 0)
                })
        }
    },[user]);

    return (
        <>
            <Container>
                <div className="content-wrapper">
                    {/* Verifies if there is a journal, otherwise will redirect the user back to the journals page */}
                    {!hasJournals ? <Redirect to="/journals"/> : null}
                    <Background>
                        <img src={BackgroundImg} alt="backgroundImg"/>
                    </Background>
                    <div className="app-wrapper">
                        <div className="logo">
                            <img src={LogoImg} alt="logo"></img>
                        </div>   

                        {/* Jorunal routes list */}
                        <Switch>
                            <Route exact path={path}> 
                                <JournalList user={user}></JournalList>
                            </Route>
                            <Route exact path={`${path}/create`}>
                                <JournalCreate user={user}></JournalCreate>
                            </Route>
                            <Route exact path={`${path}/:id`}>
                                <NotesList></NotesList>
                            </Route>
                            <Route exact path={`${path}/:id/create`}>
                                <NotesCreate></NotesCreate>
                            </Route>
                            <Route exact path={`${path}/:id/:entryId`}>
                                <NotesEdit></NotesEdit>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Container>
        </>
    )
}