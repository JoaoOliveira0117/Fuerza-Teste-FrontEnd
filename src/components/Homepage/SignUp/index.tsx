import React, { useState } from "react";
import http from "../../../services/api";
import { Link } from "react-router-dom";
import { Background, Container, SignupInput } from "./styles";

import LogoImg from "../../../assets/LogoImg.svg";
import BackgroundImg from "../../../assets/BackgroundImg.svg";

export function SignUp() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [error,setError] = useState("");

    const login = async () => {
        setError("");

        if(username === "" || password === ""){
            return setError("Username and password must be provided");
        }

        await http.post("/auth/signup",{ username, password, email })
            .catch(error => setError(error));
    }

    return (
        <>
            <Container>
                <div className="content-wrapper">
                    <Background>
                        <img src={BackgroundImg} alt="backgroundImg"/>
                    </Background>
                    <div className="signupForm">
                        <div className="logo-wrapper">
                            <img src={LogoImg} alt="logo"></img>
                        </div>
                        <div className="header">
                            <h1>Sign Up</h1>
                            <Link className="link" to="/login">Already have an account</Link>
                        </div>
                        <div>
                            <SignupInput>
                                <input 
                                    type="text" 
                                    className="username" 
                                    name="username"
                                    placeholder=" "
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                ></input>
                                <span>Define a username</span>
                            </SignupInput>
                            <SignupInput>
                                <input 
                                    type="password" 
                                    className="password" 
                                    name="password"
                                    placeholder=" "
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                ></input>
                                <span>Set your password</span>
                            </SignupInput>
                            <SignupInput>
                                <input 
                                    type="email" 
                                    className="email" 
                                    name="email"
                                    placeholder=" "
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                ></input> 
                                <span>Email (optional)</span>    
                            </SignupInput> 
                        </div>
                        <div className="error">
                            <p>{error ?? error}</p>
                        </div>
                        <div className="button-wrapper">
                            <button onClick={login}>
                                Create account
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}