import CadastroTarefa from './CadastroTarefa'
import './NovaTarefa.css'
import React from 'react'
import { useState } from 'react'

const NovaTarefa = () => {

  const [criarTarefa, setCriarTarefa] = useState(false)
  


  const handleClick = ()=>{
      criarTarefa === true ? setCriarTarefa(false):setCriarTarefa(true);
    }
    

  return (
    <>
      <button className='novaTarefaBtn' onClick={handleClick}>NOVA TAREFA</button>
      <CadastroTarefa criarTarefa={criarTarefa} setCriarTarefa={setCriarTarefa}/>
    </>
  )
}

export default NovaTarefa
