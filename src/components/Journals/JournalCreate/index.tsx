import React, { useState } from "react";
import http from "../../../services/api";
import { useHistory  } from "react-router-dom";
import { User } from "../../../interfaces/user.interface";

import JournalImg from "../../../assets/JournalImg.svg";

interface UserProps extends User {}

export function JournalCreate(props: {user: UserProps | undefined}){
    const [journalTitle, setjournalTitle] = useState("");

    const history = useHistory();

    const saveJournal = () => {
        http.post('/journals/', { title: journalTitle, userId: props.user?.id })
            .then(response => localStorage.setItem("@user", JSON.stringify(response))) // save user auth + journal data on local storage
            .then(response => history.goBack());
    }

    // adicionar edição de jornais
    return (
        <>
            <div>
                <div>
                    <img src={JournalImg} alt="Journal"></img>
                    <p>{journalTitle}</p>
                </div>
                <div>
                    <input 
                        type="text" 
                        name="journal-name" 
                        placeholder="Journal Name"
                        onChange={(e) => setjournalTitle(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={saveJournal}>Save Journal</button>
                </div>
            </div>
        </>
    );
}