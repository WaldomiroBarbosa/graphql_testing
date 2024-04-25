import { useState } from 'react'
import Axios  from 'axios';

export const Actone = () =>
{
    const [echostart, setEchostart] = useState("")
    const [newEcho, setNewEcho] = useState('');

    const createEcho = (e) =>
    {
        e.preventDefault()

        Axios.post('http://localhost:3002/actone', {
            echovalue: echostart
        }).then(response => {
            setNewEcho(response.data); // Atualiza o estado newEcho
        }).catch(error => {
            console.error('Erro ao criar o eco:', error);
        })
    }

    return ( 
    <>  
        <h1 className="title">ATIVIDADE 1</h1>
            <div>
                <form className="echoform" onSubmit = { createEcho }>
                    <label>
                        <p>Escreva uma mensagem de texto e espere um super eco!</p>
                        <textarea
                            type = "textarea"                            
                            value = { echostart }
                            name = "echostart"
                            class = "echotext"
                            onChange = {e => setEchostart(e.target.value)} 
                        />
                        <div><button> Enviar </button></div>
                    </label>
                </form>
            </div>
            <div>
                <h1>{newEcho}</h1>
            </div>
    </>
    )}

export default Actone