import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login/Login";
import styled from "styled-components";

export default function App(){
    return(
    <Allstyleds>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/> 
            <Route path="/cadastro" />
            <Route path="/habitos" />
            <Route path="/hoje" />
            <Route path="/historico"/>
        </Routes>
    </BrowserRouter>
    </Allstyleds>
    );
};

const Allstyleds = styled.div`
    font-family: 'Lexend Deca', sans-serif;
`;