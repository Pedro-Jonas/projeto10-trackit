import { useContext } from "react";
import ContextLogin from "../../Contexts/ContextLogin";
import { Link } from "react-router-dom";
import axios from "axios";
import StyledForm from "../Styleds/StyledForm";

export default function FormLogin(){
    const {email, setEmail} = useContext(ContextLogin);
    const {senha, setSenha} = useContext(ContextLogin);
    const {nome, setNome} = useContext(ContextLogin);
    const {foto, setFoto} = useContext(ContextLogin);

    function handleForm(e){
        e.preventDefault();
    }

    function sucess(){
        alert("Cadastro realizado com sucesso, vá para tela de login para iniciar");

    }

    function error(){
        alert("Por favor preencha os campos novamente");
    }

    function submit(){
        if (email !== ""  && senha !== "" && nome !== "" && foto !== ""){
            const cadastro = {
                email: email,
	            name: nome,
	            image: foto,
	            password: senha,
            };
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
            request.then(()=> sucess());
            request.catch(()=> error());
        };
    }

    return(
        <StyledForm>
        <form onSubmit={handleForm}>
            <div className="inputs">
            <div className="input">
                <input type="email" onChange={(e)=> setEmail(e.target.value)} required  placeholder="email" />
            </div>
            <div className="input" >
                <input type="password" onChange={(e)=> setSenha(e.target.value)} required  placeholder="senha" />
            </div> 
            <div className="input" >
                <input type="text" onChange={(e)=> setNome(e.target.value)} required  placeholder="nome" />
            </div> 
            <div className="input" >
                <input type="url" onChange={(e)=> setFoto(e.target.value)} required  placeholder="foto" />
            </div> 
            </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            cadastrar
        </div>
        <div className="link">
            <Link to={"/"}>
                Já tem uma conta? Faça login!
            </Link>
        </div>
        </div>
	    </form>
        </StyledForm>
    );
};