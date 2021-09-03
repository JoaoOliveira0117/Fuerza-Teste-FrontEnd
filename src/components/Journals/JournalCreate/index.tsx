import React, { useState } from "react";
import http from "../../../services/api";
import { useHistory  } from "react-router-dom";
import { User } from "../../../interfaces/user.interface";
import { Container } from "./styles";

import JournalImg from "../../../assets/JournalImg.svg";

interface UserProps extends User {}

export function JournalCreate(props: {user: UserProps | undefined}){
    const [journalTitle, setjournalTitle] = useState("");
    const [error,setError] = useState("");

    const history = useHistory();

    const saveJournal = () => {
        setError("");
        if(journalTitle === ""){
            return setError("Title must not be empty");
        }

        http.post('/journals/', { title: journalTitle, userId: props.user?.id })
            .then(response => localStorage.setItem("@user", JSON.stringify(response))) // save user auth + journal data on local storage
            .then(response => history.goBack());
    }

    // adicionar edição de jornais
    return (
        <>
            <Container>
                <div className="content-wrapper">
                    <div className="journal-wrapper">
                        <div className="journal">
                            <img src={JournalImg} alt="Journal"></img>
                            <h2>
                                {journalTitle}
                            </h2>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            name="journal-name" 
                            placeholder="Title"
                            maxLength={30}
                            onChange={(e) => setjournalTitle(e.target.value)}
                        />
                        <p className="error">{error}</p>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={saveJournal}>Save Journal</button>
                    </div>
                </div>
            </Container>
        </>
    );
}