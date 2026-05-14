import React, { use } from 'react'
import PlayerCard from '../PlayerCard/PlayerCard';

export default function Available({ promiseData , player , setPlayer}) {
  const playerData = use(promiseData);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-10/12 mx-auto'>
      {
        playerData.map((res=> <PlayerCard key={res.id} player = {player} setPlayer ={setPlayer} res = {res}></PlayerCard>))
      }
    </div>
  )
}
