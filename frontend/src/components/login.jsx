import { useState } from 'react'
import Axios  from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const Login = () =>
{
  const [log_username, setLog_username] = useState("")
  const [log_userpw, setLog_userpw] = useState("")
  const navigateTo = useNavigate();

  const logUser = (e) =>
  {
    e.preventDefault()
    
    Axios.post('http://localhost:3002/login', {
      log_username_post: log_username,
      log_password_post: log_userpw,
    }).then(response => {
      console.log(response.data); 
    })

    const requestBody = {
      query: `
      mutation SignIn($username: String!, $password: String!) {
        signUp(username: $username, password: $password) {
          token
          user {
            username
          }
        }
      }
    `,
    variables: {
      username: log_username,
      password: log_userpw
    }
    }

    fetch('http://localhost:3002/graphql',{
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }  
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      navigateTo('/userpage');
    }).catch(error => {
      console.error('Erro ao chamar a mutação signUp:', error);
    })
  }

  return ( 
  <div className="auth-form-container">
  <form className="user_log_form" onSubmit={ logUser }>

    <h1 className="title">Logar-se</h1>
    <div className="form_row">

      <label htmlFor="username">
        <div>Nome de usuário:</div>
      </label>
      <input
        type = "text" 
        value = { log_username } 
        name ="username"
        onChange = {e => setLog_username(e.target.value)} 
      />

      <label htmlFor="userpw">
        <div>Senha:</div>
      </label>
        <input 
          type = "password"
          value = { log_userpw } 
          name = "userpw" 
          onChange = {e => setLog_userpw(e.target.value)}
        />

    </div>
    <button className="log_user">Logar</button>
  </form>
  
 
  
  <div>
    <label htmlFor="create_user">Não tem cadastro?</label>
    <Link to="/register" className="link-btn">
    <button className="create_user">Registrar</button>
    </Link>
  </div>
  </div>
)}

export default Login