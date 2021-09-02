import http from "../../../services/api";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assets/LogoImg.svg";

export function SignUp() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const login = () => {
        http.post("/auth/signup",{ username, password, email })
            .catch(error => setError(error));
    }

    return (
        <>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="logo"></img>
                </div>
                <div>
                    <h2>Sign Up</h2>
                    <Link to="/login">Already have an account</Link>
                </div>
                <div>
                    <input 
                        type="text" 
                        className="username" 
                        name="username"
                        placeholder="Define a username"
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }}
                    ></input>
                    <input 
                        type="password" 
                        className="password" 
                        name="password"
                        placeholder="Set your password"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    ></input>
                    <input 
                        type="email" 
                        className="email" 
                        name="email"
                        placeholder="Email (optional)"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    ></input>      
                </div>
                <div>
                    <button onClick={login}>
                        Create account
                    </button>
                </div>
            </div>
        </>
    )
}