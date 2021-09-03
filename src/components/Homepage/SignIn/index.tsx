import React, { useState } from "react";
import http from "../../../services/api";
import { Link, useHistory  } from "react-router-dom";
import { Background, Container, LoginInput } from "./styles";

import LogoImg from "../../../assets/LogoImg.svg";
import BackgroundImg from "../../../assets/BackgroundImg.svg";

export function SignIn() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    
    const history = useHistory();

    const login = () => {
        setError("");

        if(username === "" || password === ""){
            return setError("Username and password must be provided");
        }

        http.post("/auth/login",{ username, password })
            .then(response => localStorage.setItem("@user", JSON.stringify(response))) // save user auth data on local storage
            .then(response => history.push("/journals")) // send user to journal dashboard if authenticated
            .catch(error => setError(error));
    }

    return (
        <>
            <Container>
                <div className="content-wrapper">
                    <Background>
                        <img src={BackgroundImg} alt="backgroundImg"/>
                    </Background>
                    <div className="loginForm">
                        <div className="logo-wrapper">
                            <img src={LogoImg} alt="logo"/>
                        </div>
                        <div className="header">
                            <h1>Sign in</h1>
                            <Link className="link" to="/signup">Sign up</Link>
                        </div>
                        <div>
                            <LoginInput>
                                <input 
                                    type="text" 
                                    className="username" 
                                    name="username"
                                    placeholder=" "
                                    onChange={(e)=>{
                                        setUsername(e.target.value);
                                    }}
                                ></input>
                                <span>Your username</span>
                            </LoginInput>
                            <LoginInput>
                                <input 
                                    type="Password" 
                                    className="password" 
                                    name="password"
                                    placeholder=" "
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                ></input>
                                <span>Your password</span>
                            </LoginInput>
                            <div className="link-container">
                                <Link className="link forgot-password" to="/">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className="error">
                            <p>{error ?? error}</p>
                        </div>
                        <div className="button-wrapper">
                            <button onClick={login}>
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}