import React, { useEffect, useState } from 'react'
import './Pesquisa.css'
import NovaTarefa from './NovaTarefa';

const Pesquisa = (props) => {

    const [situacao, setSituacao] = useState("");
    

    const handlePesquisa = (e)=>{        
        
        const request = async ()=>{
            e.preventDefault();
            const url = `http://localhost:8080/tarefas?situacao=${situacao}`;
    
            const res = await fetch(url)
            const json = await res.json();
            
            props.setDados(json.content);
        }
        request();

        }
        

  return (
    <div>
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
    <NovaTarefa/>
    </div>
  )
}

export default Pesquisa
