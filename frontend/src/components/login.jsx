import { useState } from 'react'
import { Link } from "react-router-dom";

export const register = () =>
{
  const [log_username, setLog_username] = useState("")
  const [log_userpw, setLog_userpw] = useState("")

  const logUser = (e) =>
  {
    e.preventDefault()


  }

  return ( 
  <>
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

  </form>
  
  <button className="log_user">Logar</button>
  
  <div>
    <label htmlFor="create_user">Não tem cadastro?</label>
    <button className="create_user">Registrar</button>
  </div>
  </>
)}