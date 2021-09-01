import React, { useState } from "react";
import http from "../../../services/api";
import { Link, useHistory  } from "react-router-dom";

import LogoImg from "../../../assets/LogoImg.svg";

export function SignIn() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    
    const history = useHistory();

    const login = () => {

        http.post("/auth/login",{ username, password })
            .then(response => localStorage.setItem("@user", JSON.stringify(response))) // save user auth data on local storage
            .then(response => history.push("/journals")) // send user to journal dashboard if authenticated
            .catch(error => setError(error));
    }

    return (
        <>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="logo"></img>
                </div>
                <div>
                    <h2>Sign in</h2>
                    <Link to="/signup">Sign up</Link>
                </div>
                <div>
                    <input 
                        type="text" 
                        className="username" 
                        name="username"
                        placeholder="Your username"
                        onChange={(e)=>{
                            setUsername(e.target.value);
                        }}
                    ></input>
                    <input 
                        type="Password" 
                        className="password" 
                        name="password"
                        placeholder="Your password"
                        onChange={(e)=>{
                            setPassword(e.target.value);
                        }}
                    ></input>
                    <div>
                        <a href="/">Forgot Password?</a>
                    </div>
                </div>
                <div>
                    <button onClick={login}>
                        Log In
                    </button>
                    {error ?? <div>{error}</div>}
                </div>
            </div>
        </>
    )
}