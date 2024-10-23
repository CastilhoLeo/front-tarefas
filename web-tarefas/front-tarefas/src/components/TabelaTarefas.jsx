import React from 'react'
import './TabelaTarefas.css'

const TabelaTarefas = (props)=>{
    return(
        <table className='tabelaTarefas'>
            <tr>
                <th>Id</th>
                <th>Titulo</th>
                <th>Data Vencimento</th>
                <th>Situação</th>
            </tr>

            
                {props.tarefas.map((t)=>(<tr>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.dataVencimento}</td>
                    <td>{t.situacao}</td>
                    <td>
                        <button>EDITAR</button>
                        <button>EXCLUIR</button>
                        <button>{t.situacao === "PENDENTE"? "FINALIZAR":"REABRIR"}</button> 
                    </td>
                </tr>))}
            
        </table>
    )
}

export default TabelaTarefas;