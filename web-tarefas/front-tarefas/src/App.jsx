
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pesquisa from './components/Pesquisa'
import TabelaTarefas from './components/TabelaTarefas'
import FormNovaTarefa from './components/FormNovaTarefa'
import NovaTarefa from './components/NovaTarefa'
import api from '/src/services/Requests'



function App() {

  const [dados, setDados] = useState([]);
  const [refresh, setRefresh] = useState(false)
  const [formTarefa, setFormTarefa] = useState(false)
  const [tarefa, setTarefa] = useState({
    titulo:"",
    descricao:"",
    dataVencimento:"",
    situacao:"PENDENTE"
  })
 
 useEffect(()=>{
  api.requestInicial("", setDados)
 },[refresh,tarefa])


  return (
    
      <div className='App'>
        <Header/>
        <div className='menu'>
        <Pesquisa setDados={setDados}/> 
        <NovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa}/>
        </div>
        <TabelaTarefas dados={dados} formTarefa={formTarefa} setFormTarefa={setFormTarefa} tarefa={tarefa} setTarefa={setTarefa} setDados={setDados} setRefresh={setRefresh} refresh={refresh}/>
        {formTarefa && <FormNovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa} tarefa={tarefa} setTarefa={setTarefa}/>}
      </div>
   
    
  )
}

export default App
