import React, { useEffect, useState } from "react";
import http from "../../services/api";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../interfaces/user.interface";
import { NotesList } from "../Notes";
import { NotesCreate } from "../Notes/NotesCreate";
import { JournalCreate } from "./JournalCreate";
import { JournalList } from "./JournalList";

import LogoImg from "../../assets/LogoImg.svg"
import { NotesEdit } from "../Notes/NotesEdit";

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
                    setHasJournals(journals.length == 0)
                })
        }
    },[user]);

    return (
        <>
            {/* Verifies if there is a journal, otherwise will redirect the user back to the journals page */}
            {!hasJournals ? <Redirect to="/journals"/> : null}
            <div>
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
        </>
    )
}