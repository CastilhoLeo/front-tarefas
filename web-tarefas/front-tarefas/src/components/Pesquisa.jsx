import React, { useState } from 'react'
import './Pesquisa.css'

const Pesquisa = () => {

    const [situacao, setSituacao] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(situacao)
    }

  return (
      <form className='pesquisa' onSubmit={handleSubmit}>
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
