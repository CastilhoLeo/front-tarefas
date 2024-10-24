import React from 'react'
import './TabelaTarefas.css'

const TabelaTarefas = (props)=>{

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
                {props.tarefas.map((t)=>(<tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.dataVencimento}</td>
                    <td>{t.situacao}</td>
                    <td>
                        <button>{t.situacao === "PENDENTE"? "FINALIZAR":"REABRIR"}</button> 
                        <button>EDITAR</button>
                        <button>EXCLUIR</button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default TabelaTarefas;