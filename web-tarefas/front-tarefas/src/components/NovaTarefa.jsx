
import './NovaTarefa.css'
import React from 'react'

const NovaTarefa = (props) => {


  const handleClick = ()=>{
      props.formTarefa === true ? props.setFormTarefa(false):props.setFormTarefa(true);
    }
    
  return (
    <div>
      <button className='novaTarefaBtn' onClick={handleClick}>NOVA TAREFA</button>
    </div>
  )
}

export default NovaTarefa
