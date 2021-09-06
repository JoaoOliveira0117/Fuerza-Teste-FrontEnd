import React, { useEffect, useState } from "react";
import http from "../../../services/api";
import { useParams, useHistory } from "react-router-dom";
import { Entry } from "../../../interfaces/entry.interface";
import { Journal } from "../../../interfaces/journal.interface";
import { Container } from "./styles";

import BackArrowImg from "../../../assets/BackArrowImg.svg";

interface IParams { 
    id: string,
    entryId: string,
}

export function NotesEdit(){
    const [journal, setJournal] = useState<Journal>(); // get context Journal from api
    const [entry, setEntry] = useState<Entry>();
    const [entryTitle, setEntryTitle] = useState("");
    const [entryContent, setEntryContent] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();
    const { id, entryId }= useParams<IParams>()

    //on button click, sets Entry title and content
    const createNote = () => {
        if(entryTitle === "" || entryContent === "") {
            return setError("Title and content must be provided")
        }
        setEntry({title: entryTitle, content: entryContent})
    }

    //when component loads, get the journal.
    useEffect(() => {
        http.get(`/journals/one/${id}`)
            .then(response => {
                let {journal} = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Journal object.
                setJournal(journal);
            });
    },[]);

    useEffect(() => {
        http.get(`/journals/entries/one/${entryId}`)
            .then(response => {
                let {entry} = JSON.parse(JSON.stringify(response)); //response returns a AxiosResponse object, to fix this we can "transform" it into a JSON Journal object.
                setEntryTitle(entry.title);
                setEntryContent(entry.content);
            });
    },[journal]);

    //at the moment an entry is created, it is sended to the api
    useEffect(() => {
        if(entry)
            http.put(`/journals/entry/${entryId}`,entry)
                .then(response => history.goBack())
                .catch(error => console.log(error));
    },[entry]);

    return (
        <>
            <Container>
                    <div className="header">
                        <div className="backArrow" onClick={() => history.goBack()}>
                            <img src={BackArrowImg} alt="BackArrowImg" />
                        </div>
                        <div className="title-wrapper">
                            <h2>{journal?.title}</h2>
                        </div>
                    </div>
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Title"
                            value={entryTitle}
                            onChange={(e) => setEntryTitle(e.target.value)}
                        ></input>
                        <textarea 
                            className="textarea"
                            rows={20}
                            name="content" 
                            placeholder="Write your note"
                            value={entryContent}
                            onChange={(e) => setEntryContent(e.target.value)}
                        ></textarea>
                    </div>
                    <p className="error">{error}</p>
                    <div className="button-wrapper">
                        <button onClick={createNote}>
                            Save note
                        </button>
                    </div>
            </Container>
        </>
    )
}