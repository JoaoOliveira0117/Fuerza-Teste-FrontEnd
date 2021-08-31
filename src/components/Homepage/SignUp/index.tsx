import React from "react";
import LogoImg from "../../../assets/LogoImg.svg";

export function SignUp() {
    return (
        <>
            <div className="container">
                <div>
                    <img src={LogoImg} alt="logo"></img>
                </div>
                <div>
                    <h2>Sign Up</h2>
                    <a href="/login">Already have an account</a>
                </div>
                <div>
                    <input 
                        type="text" 
                        className="username" 
                        name="username"
                        placeholder="Define a username"
                    ></input>
                    <input 
                        type="password" 
                        className="password" 
                        name="password"
                        placeholder="Set your password"
                    ></input>
                    <input 
                        type="email" 
                        className="email" 
                        name="email"
                        placeholder="Email (optional)"
                    ></input>      
                </div>
                <div>
                    <button>
                        Create account
                    </button>
                </div>
            </div>
        </>
    )
}