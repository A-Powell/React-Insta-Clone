import React from 'react';
import './login.css';

let username = "";
let password = "";

const getUser = (event) => {
    username = event.target.value;
}

const getPwd = (event) => {
    password = event.target.value;
}

const login = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

const Login = () => {
    return(
        <div className="div">
        <form className="login" onSubmit = {login}>
        <h3 className="h3">Login</h3>
        <input className="input" type = "text" placeholder = "username" onChange = {getUser}/>
        <input className="input" type = "password" placeholder = "password" onChange = {getPwd}/>
        <input className="button" type = "submit" value = "submit" />
        </form>
        </div>
    );
}

export default Login;