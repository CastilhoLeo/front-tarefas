import React, { useEffect, useState } from 'react'
import './FormNovaTarefa.css'

const FormNovaTarefa = (props) => {

  const[tarefa, setTarefa] = useState(props.tarefa)
  const[erro, setErro] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();

    const request = async ()=>{

      const url = `http://localhost:8080/tarefas`;

      const res = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
      
      body: JSON.stringify(tarefa)
        
    });


    if (res.ok){
      alert("cadastro realizado com sucesso")
    } else{
      const err = await res.json()
      alert(err.message)
    }

   }

  request();
  
    
  setTarefa({titulo:"",
    descricao:"",
    dataVencimento:"",
    situacao:"PENDENTE"})
  }


  const handleChange = (campo, valor)=>{

    setTarefa((prevTarefa)=>({
        ...prevTarefa,
        [campo]:valor,
    }));

  }

  const handleFechar = ()=>{
    props.setFormTarefa(false)
    props.setTarefa({titulo:"",
      descricao:"",
      dataVencimento:"",
      situacao:"PENDENTE"})
  }
 

  return (
    <div className='modal'>
      <div className='modalContent'>
      <form className='formNovaTarefa' onSubmit={handleSubmit}>
        <h1>NOVA TAREFA</h1>
        <label>Titulo</label>
        <input type='text' value={tarefa.titulo} onChange={(e)=>handleChange("titulo", e.target.value)}></input>

        <label>Descrição</label>
        <textarea rows={4} maxLength={200} value={tarefa.descricao} onChange={(e)=>handleChange("descricao", e.target.value)}></textarea>

        <label>Data de Vencimento</label>
        <input type="date" id="dataVencimento" value={tarefa.dataVencimento} onChange={(e)=>handleChange("dataVencimento", e.target.value)}/>

        <label>Situação</label>
        <select id="situacao" value={tarefa.situacao} onChange={(e)=>handleChange("situacao", e.target.value)}>
          <option value="PENDENTE">Pendente</option>
          <option value="FINALIZADO">Finalizado</option>
        </select>
        <div className='botoesForm'>
        <button type='submit'>Salvar</button>
        <button type='button' onClick={()=>handleFechar()}>Fechar</button>
        </div>
      </form>
      
      </div>
    </div>
  )
}

export default FormNovaTarefa
