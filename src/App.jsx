import { Suspense, useEffect, useState } from 'react'
import Navbar from './componet/navbar/Navbar'
import AvailablePlayers from './componet/availablePlayers/AvailablePlayers'
import Available from './componet/available/Available';
import Selected from './componet/selected/Selected';
import { ToastContainer, toast } from 'react-toastify';

const promiseData = fetch('/data/api.json').then(res => res.json())

function App() {
  const [count, setCount] = useState(0);
  const [coin, setCoin] = useState(10000000);
  const [available, setAvilable] = useState(true);
  const [player, setPlayer] = useState([]);
  const [selected, setSelected] = useState([]);

  const handlelSelected = (id) => {
    const newData = [...selected, id];
    setSelected(newData)
    setCount(newData?.length);
  };

  const selectedRemoveHandleing = (playerData) => {
    const newPlayer = selected.filter(data => data.id !== playerData.id);
    setCount(newPlayer.length)
    setSelected(newPlayer)
  }
  console.log(selected);
  return (
    <>
      <Navbar
        coin={coin}
      ></Navbar>
      <AvailablePlayers
        count={count}
        setCount={setCount}
        available={available}
        setAvilable={setAvilable}>
      </AvailablePlayers>
      {available ? (<Suspense
        fallback={<div className=' w-10/12 mx-auto flex justify-center'> <span className=" loading loading-spinner loading-xl"></span></div>}>
        <Available
          coin={coin}
          setCoin={setCoin}
          count={count}
          handlelSelected={handlelSelected}
          player={player}
          setPlayer={setPlayer}
          selected={selected}
          setSelected={setSelected}
          promiseData={promiseData}>
        </Available>
      </Suspense>)
        : (selected.map((playerData) =>
          <Selected
            playerData={playerData}
            selected={selected}
            coin={coin}
            setCoin={setCoin}
            selectedRemoveHandleing={selectedRemoveHandleing}
            setSelected={setSelected}>
          </Selected>))}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
