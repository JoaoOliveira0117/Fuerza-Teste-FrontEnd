import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { User } from "../../interfaces/user.interface";
import { NotesList } from "../Notes";
import { NotesCreate } from "../Notes/NotesCreate";
import { JournalCreate } from "./JournalCreate";
import { JournalList } from "./JournalList";

import LogoImg from "../../assets/LogoImg.svg"


export function Journals(){
    const [user,setUser] = useState<User>();
    let { path } = useRouteMatch();

    // get actual user from local storage
    useEffect(() => {
        let { user } = JSON.parse(localStorage.getItem("@user")!);
        console.log(user);
        setUser(user);
    },[]);

    return (
        <>
            <div>
                <img src={LogoImg} alt="logo"></img>
            </div>   

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
            </Switch>
        </>
    )
}