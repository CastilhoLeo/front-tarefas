
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
 




  return (
    
      <div className='App'>
        <Header/>
        <Pesquisa setDados={setDados}/> 
        <NovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa}/>
        <TabelaTarefas dados={dados} formTarefa={formTarefa} setFormTarefa={setFormTarefa}/>
        {formTarefa && <FormNovaTarefa formTarefa={formTarefa} setFormTarefa={setFormTarefa}/>}
      </div>
   
    
  )
}

export default App
