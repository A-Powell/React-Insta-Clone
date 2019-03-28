import React from 'react';
import styled from 'styled-components';

const LoginStyle = styled.form `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 60px;
    border-radius: 10px;
    background-color: gray;
`;

const InputStyle = styled.input `
    margin: 5px;
    text-align: center;
    justify-content: center;
    border:1px solid black;
    padding: 5px;
    border-radius: 5px;
`;

const DivWrapper = styled.div` 
    display: flex;
    justify-content: center;
    margin-top: 60px;
`;

const ButtonStyle = styled.input `
    padding: 6px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const StyledH3 = styled.h3` 
    
    font-size: 25px;
`;



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
        <DivWrapper>
        <LoginStyle onSubmit = {login}>
        <StyledH3>Login</StyledH3>
        <InputStyle type = "text" placeholder = "username" onChange = {getUser}/>
        <InputStyle type = "password" placeholder = "password" onChange = {getPwd}/>
        <ButtonStyle type = "submit" value = "submit" />
        </LoginStyle>
        </DivWrapper>
    );
}

export default Login;