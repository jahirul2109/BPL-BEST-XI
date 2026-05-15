import { Suspense, useEffect, useState } from 'react'
import Navbar from './componet/navbar/Navbar'
import AvailablePlayers from './componet/availablePlayers/AvailablePlayers'
import Available from './componet/available/Available';
import Selected from './componet/selected/Selected';

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
        fallback={ <div className=' w-10/12 mx-auto flex justify-center'> <span className=" loading loading-spinner loading-xl"></span></div>}>
        <Available
          coin={coin}
          setCoin={setCoin}
          handlelSelected={handlelSelected}
          player={player}
          setPlayer={setPlayer}
          promiseData={promiseData}>
          selected={selected}
          setSelected={setSelected}
        </Available>
      </Suspense>)
        : (selected.map((playerData) =>
          <Selected
            playerData={playerData}
            selected={selected}
            setSelected={setSelected}>
          </Selected>))}
    </>
  )
}

export default App
