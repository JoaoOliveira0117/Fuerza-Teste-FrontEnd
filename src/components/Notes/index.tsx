import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import EmptyStateImg from "../../assets/EmptyStateImg.svg";

export function NotesList(){
    let { path } = useRouteMatch();

    return (
        <>
            <div>
                <div>
                    HTML
                </div>
                <div>
                    <img src={EmptyStateImg} alt="Empty"></img>
                </div>
                <div>
                    <Link to={`${path}/create`}>Create a note</Link>
                </div>
            </div>
        </>
    )
}