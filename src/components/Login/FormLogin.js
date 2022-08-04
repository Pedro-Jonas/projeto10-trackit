import { Link } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import ContextLogin from "../../Contexts/ContextLogin";
import StyledForm from "../Styleds/StyledForm";

export default function FormLogin(){
    const {email, setEmail} = useContext(ContextLogin);
    const {senha, setSenha} = useContext(ContextLogin);
    const {setToken} = useContext(ContextLogin);

    function handleForm(e){
        e.preventDefault();
    }

    function sucess(resposta){
        console.log(resposta);
        setToken(resposta.data.token);
    }

    function error(){
        alert("Email ou senha inválida");
    }

    function submit(){
        console.log(email, senha);
        if (email !== ""  && senha !== ""){
            const login = {
                email: email,
	            password: senha,
            }
            console.log(login);
            const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
            request.then((resposta)=> sucess(resposta))
            request.catch(()=> error())
        }
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
            </div>
        <div>
        <div className="play" onClick={()=> submit()}>
            Entrar
        </div>
        <div className="link">
            <Link to={"/cadastro"}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </div>
        </div>
	    </form>
        </StyledForm> 
    );
};
