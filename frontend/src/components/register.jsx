import { useState } from 'react'
import { Link } from "react-router-dom";

export const register = () =>
{
  const [reg_username, setReg_username] = useState("")
  const [reg_userpw, setReg_userpw] = useState("")

  const createUser = (e) =>
  {
    e.preventDefault()


  }

  return ( 
  <>
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

  </form>
  
  <button className="create_user">Registrar</button>
  
  <div>
    <label htmlFor="log_user">Já tem cadastro?</label>
    <button className="log_user">Logar</button>
  </div>
  </>
)}