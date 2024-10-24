import React, { useState } from 'react'
import './Pesquisa.css'

const Pesquisa = (props) => {

    const [situacao, setSituacao] = useState("");
    const url = `https://localhost:8080?situacao=${situacao}`;

    const request = async ()=>{
        const res = await fetch(url)
        const json = await res.json();
        
        return json;
        console.log(json)
    }

    const handlePesquisa = (e)=>{
        e.preventDeefault();
        request();
        }
    
    

  return (
      <form className='pesquisa' onSubmit={handlePesquisa}>
        <label> SITUAÇÃO:
            <select name="situacao" value={situacao} onChange={(e)=>setSituacao(e.target.value)}>
                <option value="">TODOS</option>
                <option value="PENDENTE">PENDENTE</option>
                <option value="FINALIZADO">FINALIZADO</option>
            </select>
            <button type='submit'>PESQUISAR</button>
        </label>
      </form>
  )
}

export default Pesquisa
