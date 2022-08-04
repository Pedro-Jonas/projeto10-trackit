import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro"
import ContextLogin from "../Contexts/ContextLogin";
import styled from "styled-components";

export default function App(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [token, setToken] = useState("");

    return(
    <Allstyleds>
    <ContextLogin.Provider value={{email, setEmail, senha, setSenha, nome, setNome, foto, setFoto, token, setToken}}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/> 
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/habitos" />
            <Route path="/hoje" />
            <Route path="/historico"/>
        </Routes>
    </BrowserRouter>
    </ContextLogin.Provider>
    </Allstyleds>
    );
};

const Allstyleds = styled.div`
    font-family: 'Lexend Deca', sans-serif;
`;