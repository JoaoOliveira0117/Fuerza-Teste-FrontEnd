import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import LogoImg from "../../assets/LogoImg.svg"
import { NotesList } from "../Notes";
import { NotesCreate } from "../Notes/NotesCreate";
import { JournalCreate } from "./JournalCreate";
import { JournalList } from "./JournalList";

export function Journals(){
    let { path } = useRouteMatch();

    return (
        <>
            <div>
                <img src={LogoImg} alt="logo"></img>
            </div>   

            <Switch>
                <Route exact path={path}> 
                    <JournalList></JournalList>
                </Route>
                <Route exact path={`${path}/create`}>
                    <JournalCreate></JournalCreate>
                </Route>
                <Route exact path={`${path}/id`}>
                    <NotesList></NotesList>
                </Route>
                <Route exact path={`${path}/id/create`}>
                    <NotesCreate></NotesCreate>
                </Route>
            </Switch>
        </>
    )
}