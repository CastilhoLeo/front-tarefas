
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import TabelaTarefas from './components/TabelaTarefas'
import NovaTarefa from './components/NovaTarefa'


function App() {

  const [dados, setDados] = useState([]);
  const [editarTarefa, setEditarTarefa] = useState(false)
  const [criarTarefa, setCriarTarefa] = useState(false)

  return (
    
      <div className='App'>
        <Header/>
        <Pesquisa setDados={setDados} criarTarefa={criarTarefa} setCriarTarefa={setCriarTarefa}/>
        <TabelaTarefas dados={dados} editarTarefa={editarTarefa} setEditarTarefa={setEditarTarefa} criarTarefa={criarTarefa} setCriarTarefa={setCriarTarefa} />
      </div>
   
    
  )
}

export default App
