import { Suspense, useEffect, useState } from 'react'
import Navbar from './componet/navbar/Navbar'
import AvailablePlayers from './componet/availablePlayers/AvailablePlayers'
import Available from './componet/available/Available';
import Selected from './componet/selected/Selected';

const promiseData = fetch('/data/api.json').then(res => res.json())

function App() {
  const [available, setAvilable] = useState(true);
  const [player, setPlayer] = useState([]);
  const [selected , setSelected] = useState([]);
  const handlelSelected = (id) => {
    const newData = [...selected , id];
    setSelected(newData)
  };
  console.log(selected);
  return (
    <>
      <Navbar></Navbar>
      <AvailablePlayers  available={available} setAvilable={setAvilable}></AvailablePlayers>
      {available ? (<Suspense fallback = {<p> Data is Loadding</p>}><Available handlelSelected = {handlelSelected} player = {player} setPlayer ={setPlayer}  promiseData={promiseData}></Available></Suspense>) : (selected.map((playerData) => <Selected selected = {selected} playerData = {playerData} setSelected = {setSelected}></Selected> )) }
    </>
  )
}

export default App
