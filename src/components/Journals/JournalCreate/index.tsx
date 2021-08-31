import React from "react";
import JournalImg from "../../../assets/JournalImg.svg";

export function JournalCreate(){
    return (
        <>
            <div>
                <div>
                    <img src={JournalImg} alt="Journal"></img>
                </div>
                <div>
                    <input type="text" name="journal-name" placeholder="Journal Name"/>
                </div>
                <div>
                    <button>Save Journal</button>
                </div>
            </div>
        </>
    );
}