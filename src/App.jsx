import { useState } from 'react'
import Navbar from './componet/navbar/Navbar'
import AvailablePlayers from './componet/availablePlayers/AvailablePlayers'

function App() {
  const [available, setAvilable] = useState(true)

  return (
    <>
    <Navbar></Navbar>
    <AvailablePlayers available = {available} setAvilable = {setAvilable}></AvailablePlayers>
    </>
  )
}

export default App
