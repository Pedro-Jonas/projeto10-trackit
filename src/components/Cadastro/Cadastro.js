import logo from "../../assets/images/Group 8.png"
import FormCadastro from "./FormCadastro";
import styled from 'styled-components';

export default function Login(){
    return(
        <All>
        <img src={logo} alt="logo"/>
        <FormCadastro/>
        </All>
    );
};

const All = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    img {
        width: 200px;
        height: 200px;
    }

`;