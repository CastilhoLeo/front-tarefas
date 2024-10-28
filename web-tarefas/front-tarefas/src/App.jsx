
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import TabelaTarefas from './components/TabelaTarefas'
import NovaTarefa from './components/NovaTarefa'


function App() {

  const [dados, setDados] = useState([]);

  return (
    
      <div className='App'>
        <Header/>
        <Pesquisa setDados={setDados}/>
        <TabelaTarefas dados={dados} />
      </div>
   
    
  )
}

export default App
