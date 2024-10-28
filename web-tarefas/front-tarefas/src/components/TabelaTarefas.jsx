import React, { useEffect } from 'react'
import './TabelaTarefas.css'
import api from '/src/services/Requests'

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
                {props.dados.map((t)=>(<tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.titulo}</td>
                    <td>{t.dataVencimento}</td>
                    <td>{t.situacao}</td>
                    <td>
                        <button>{t.situacao === "PENDENTE"? "FINALIZAR":"REABRIR"}</button> 
                        <button>VISUALIZAR</button>
                        <button onClick={()=>api.excluir(t.id)}>EXCLUIR</button>
                    </td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default TabelaTarefas;