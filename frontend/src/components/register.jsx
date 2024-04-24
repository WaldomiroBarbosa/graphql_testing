import { useState } from 'react'
import Axios  from 'axios'
import { Link, useNavigate } from "react-router-dom"

export const Register = () =>
{
  const [reg_username, setReg_username] = useState("")
  const [reg_userpw, setReg_userpw] = useState("")

  const createUser = (e) =>
  {
    e.preventDefault()
    
    Axios.post('http://localhost:3002/register', {
      reg_username_post: reg_username,
      reg_password_post: reg_userpw,
    }).then(response => {
      console.log(response.data); // Exemplo de uso da resposta
      // Aqui você pode tratar a resposta, redirecionar, etc.
    })

    const requestBody = {
      query: `
      mutation SignUp($username: String!, $password: String!) {
        signUp(username: $username, password: $password) {
          token
          user {
            id
            username
          }
        }
      }
    `,
    variables: {
      username: reg_username,
      password: reg_userpw
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
      console.log(data); // Resposta da mutação GraphQL
      // Aqui você pode tratar a resposta, redirecionar, etc.
    }).catch(error => {
      console.error('Erro ao chamar a mutação signUp:', error);
    });
  };

  

  return ( 
    <div className="auth-form-container">
  <form className="user_reg_form" onSubmit={ createUser }>

    <h1 className="title">Registre-se</h1>
    <div className="form_row">

      <label htmlFor="username">
        <div>Nome de usuário:</div>
      </label>
      <input
        type = "text" 
        value = { reg_username } 
        name ="username"
        onChange = {e => setReg_username(e.target.value)} 
      />

      <label htmlFor="userpw">
        <div>Senha:</div>
      </label>
        <input 
          type = "password"
          value = { reg_userpw } 
          name = "userpw" 
          onChange = {e => setReg_userpw(e.target.value)}
        />

    </div>
    <button className="create_user">Registrar</button>
  </form>
  
  
  
  <div>
    <label htmlFor="log_user">Já tem cadastro?</label>
    <Link to="/" className="link-btn">
    <button className="log_user">Logar</button>
    </Link>
  </div>
  </div>
)}

export default Register