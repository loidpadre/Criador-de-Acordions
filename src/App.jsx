import { useState } from 'react'
import './App.css'
import data from "./data/data"
import AcordionList from './components/AcordionList'
import AcordionInput from './components/input'
function App() {

  const [list, setList] = useState(data)

  return (
    <div>
      <h1>Acordiões</h1>
      <AcordionInput list={list} setList={setList} />
      <AcordionList list={list} />

    </div>
  )
}

export default App
