
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import TabelaTarefas from './components/TabelaTarefas'


function App() {

  const [dados, setDados] = useState([]);

  console.log(dados)

  const tarefas = [
    {id:1, titulo:"Teste1", dataVencimento:"23/10/2024", situacao:"PENDENTE"},
    {id:2, titulo:"Teste2", dataVencimento:"22/9/2024", situacao:"FINALIZADO"},
    {id:3, titulo:"Teste3", dataVencimento:"22/9/2024", situacao:"FINALIZADO"}
  ]

  return (
    
      <div className='App'>
        <Header/>
        <Pesquisa setDados={setDados}/>
        <TabelaTarefas tarefas={tarefas} />
      </div>
   
    
  )
}

export default App
