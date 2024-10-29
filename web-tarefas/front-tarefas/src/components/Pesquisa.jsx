import React, { useEffect, useState } from 'react'
import './Pesquisa.css'
import NovaTarefa from './NovaTarefa';
import api from '/src/services/Requests'

const Pesquisa = (props) => {

    const [situacao, setSituacao] = useState("");
    

    const handlePesquisa = (e)=>{           
        
        api.request(e,situacao,props.setDados);
        }
     

  return (
    <div className='divPesquisa'>
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
