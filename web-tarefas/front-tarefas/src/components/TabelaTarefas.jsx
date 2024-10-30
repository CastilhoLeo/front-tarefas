import React, { useEffect } from 'react'
import './TabelaTarefas.css'
import api from '/src/services/Requests'

const TabelaTarefas = (props)=>{

    const handleExcluir = (id)=>{
        if (window.confirm("Tem certeza?")){
            api.excluir(id);
        }
    }

    const handleEditar = ()=>{
        props.setEditarTarefa(true)
        props.setCriarTarefa(true)
    }


    return(
        <table className='tabelaTarefas'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Titulo</th>
                <th>Data Vencimento</th>
                <th>Situação</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
                {props.dados.map((t)=>(<tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.dataVencimento}</td>
                    <td>{t.situacao}</td>
                    <td>
                        <button>{t.situacao === "PENDENTE"? "FINALIZAR":"REABRIR"}</button> 
                        <button onClick={()=>handleEditar()}>VISUALIZAR</button>
                        <button onClick={()=>handleExcluir(t.id)}>EXCLUIR</button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default TabelaTarefas;