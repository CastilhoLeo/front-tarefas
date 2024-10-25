import CadastroTarefa from './CadastroTarefa'
import './NovaTarefa.css'
import React from 'react'
import { useState } from 'react'

const NovaTarefa = () => {

  const [criarTarefa, setCriarTarefa] = useState(false)

  console.log(criarTarefa)

  const handleClick = ()=>{

    }
    

  return (
    <>
      <button className='novaTarefaBtn' onClick={handleClick}>NOVA TAREFA</button>
      <CadastroTarefa criarTarefa={criarTarefa} setCriarTarefa={setCriarTarefa}/>
    </>
  )
}

export default NovaTarefa
