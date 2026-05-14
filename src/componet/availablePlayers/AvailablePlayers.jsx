import React from 'react'

export default function AvailablePlayers({available , setAvilable}) {
    return (
        <div className='max-w-10/12 mx-auto flex justify-between items-center mt-5'>
            <h1 className='font-bold'> {available ? "Avaible" : "Selected"} </h1>
            <div>
                <button onClick={() => setAvilable(true)} className={`py-3 px-5 btn  rounded-l-2xl border-none ${available ? "bg-amber-400" : ""}`}>Availbale</button>
                <button onClick={() => setAvilable(false)} className={`py-3 px-5 btn  rounded-r-2xl border-none ${available ? "" : "bg-amber-400"}`} >Selected</button>
            </div>
        </div>
    )
}
