import CadastroTarefa from './CadastroTarefa'
import './NovaTarefa.css'
import React from 'react'
import { useState } from 'react'

const NovaTarefa = (props) => {

  const [criarTarefa, setCriarTarefa] = useState(false)
  


  const handleClick = ()=>{
      props.criarTarefa === true ? props.setCriarTarefa(false):props.setCriarTarefa(true);
    }
    

  return (
    <>
      <button className='novaTarefaBtn' onClick={handleClick}>NOVA TAREFA</button>
      <CadastroTarefa criarTarefa={props.criarTarefa} setCriarTarefa={props.setCriarTarefa}/>
    </>
  )
}

export default NovaTarefa
