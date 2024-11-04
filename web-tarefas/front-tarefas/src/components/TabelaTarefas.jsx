import React, { useEffect, useState } from 'react'
import './TabelaTarefas.css'
import api from '/src/services/Requests'

const TabelaTarefas = (props)=>{

    const [tarefaEditar, setTarefaEditar] = useState(null);

    
    const handleExcluir = async (id)=>{
        if (window.confirm("Tem certeza?")){
            await api.excluir(id);
        }
        props.setRefresh(!props.refresh)
        console.log(props.refresh)
    }

    const handleEditar = (t)=>{
        props.setFormTarefa(true)
        props.setTarefa(t)
    }

    const handleSituacao = (t)=>{
        if(t.situacao==="PENDENTE"){
            t.situacao="FINALIZADO"
        } else{
            t.situacao="PENDENTE"
        }
        api.atualizar(t);
    }

    return(
        <table className='tabelaTarefas'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Titulo</th>
                <th>Descrição</th>
                <th>Data Vencimento</th>
                <th>Situação</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
                {props.dados.map((t)=>(<tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.descricao}</td>
                    <td>{t.dataVencimento}</td>
                    <td>{t.situacao}</td>
                    <td>
                        <button onClick={()=>handleSituacao(t)}>{t.situacao === "PENDENTE"? "FINALIZAR":"REABRIR"}</button> 
                        <button onClick={()=>handleEditar(t)}>VISUALIZAR</button>
                        <button onClick={()=>handleExcluir(t.id)}>EXCLUIR</button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default TabelaTarefas;