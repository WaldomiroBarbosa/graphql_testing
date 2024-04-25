import { useState } from 'react'
import Axios  from 'axios';

export const Actthree = () =>
{
    const [numbera, setnumbera] = useState("")
    const[anwser, setanwser] = useState(0)
    
    const calc = (e) =>
    {
        e.preventDefault()

        Axios.post('http://localhost:3002/actthree', {
            avalue: numbera
        }).then(response => {
            setanwser(response.data)
        }).catch(error => {
            console.error('Erro ao calcular:', error)
        })
    }

    return ( 
        <>  
            <h1 className="title">ATIVIDADE 3</h1>
            <div>
                <form className="deltaform" onSubmit = { calc }>
                    <label>
                        <p>Passe um valor e receba o fatorial dele.</p>
                        <input type = "text" class="smallnumber" value = { numbera } 
                            onChange = {e => setnumbera(e.target.value)} onKeyDown={(event) =>{ if(!/[0-9]/.test(event.key)) event.preventDefault() }} />
                    </label>
                    <div><button>Enviar</button></div>
                </form>
                <div><h2>O valor é: {anwser}</h2></div>
            </div>
        </>
        )}
    
    export default Actthree