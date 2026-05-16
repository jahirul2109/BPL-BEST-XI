import React from 'react'

export default function AvailablePlayers({ available, setAvilable , count , setCount}) {
    return (
        <div className='md:w-10/12 w-11/12 mx-auto flex justify-between items-center mt-5'>
            <h1 className='font-bold text-2xl'> {available ? "Avaible" : `Selected ${count}/6`} </h1>
            <div>
                <button onClick={() => setAvilable(true)} className={`py-3 px-5 btn  rounded-l-2xl border-none ${available ? "bg-amber-400" : ""}`}>Availbale</button>
                <button onClick={() => setAvilable(false)} className={`py-3 px-5 btn  rounded-r-2xl border-none ${available ? "" : "bg-amber-400"}`} >{`Selected(${count})`}</button>
            </div>
        </div>
    )
}
