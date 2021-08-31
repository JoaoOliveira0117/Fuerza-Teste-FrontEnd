import React from "react";
import LogoImg from "../../../assets/LogoImg.svg";

export function SignIn() {
    return (
        <>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="logo"></img>
                </div>
                <div>
                    <h2>Sign in</h2>
                    <a href="/signup">Sign up</a>
                </div>
                <div>
                    <input 
                        type="text" 
                        className="username" 
                        name="username"
                        placeholder="Your username"
                    ></input>
                    <input 
                        type="Password" 
                        className="password" 
                        name="password"
                        placeholder="Your password"
                    ></input>
                    <div>
                        <a href="/">Forgot Password?</a>
                    </div>
                </div>
                <div>
                    <button>
                        Log In
                    </button>
                </div>
            </div>
        </>
    )
}