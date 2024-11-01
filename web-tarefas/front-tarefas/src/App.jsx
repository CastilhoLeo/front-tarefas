
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import TabelaTarefas from './components/TabelaTarefas'
//import NovaTarefa from './components/NovaTarefa'
import FormNovaTarefa from './components/FormNovaTarefa'
import NovaTarefa from './components/NovaTarefa'


function App() {

  const [dados, setDados] = useState([]);
  const [formTarefa, setFormTarefa] = useState(false)
  const [tarefa, setTarefa] = useState({
    titulo:"",
    descricao:"",
    dataVencimento:"",
    situacao:"PENDENTE"
  })
 




  return (
    
      <div className='App'>
        <Header/>
        <Pesquisa setDados={setDados}/> 
        <NovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa}/>
        <TabelaTarefas dados={dados} formTarefa={formTarefa} setFormTarefa={setFormTarefa} tarefa={tarefa} setTarefa={setTarefa}/>
        {formTarefa && <FormNovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa} tarefa={tarefa} setTarefa={setTarefa}/>}
      </div>
   
    
  )
}

export default App
