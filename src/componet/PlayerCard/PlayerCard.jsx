import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

export default function PlayerCard({ res, player, setPlayer, handlelSelected, coin, setCoin, selected, setSelected, count }) {
    const handlePlayerData = (id) => {
        if (coin < id.price) {
            return alert("You have Not enough money")
        }
        if (count === 6) {
            return toast.error("Your already Selected 6 Player")
        } // Problem
        const newPlayer = [...player, id];
        setPlayer(newPlayer);
        handlelSelected(id);
        setCoin(pre => pre - id.price);
        toast.success("Secesfully", { autoClose: 2000 })
    }
    const isSelected = selected.find(p => p.id === res.id);
    // console.log(res)
    const {
        country,
        id,
        img,
        name,
        left_hand_bastman,
        playing_position,
        playing_role,
        price,
        rating } = res;
    return (
        <div className=' '>
            <div className=" card p-3 shadow-sm">
                <figure>
                    <img className='rounded-2xl h-60 object-cover'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='text-2xl flex items-center'>
                        <i className="fa-solid text-4xl fa-circle-user font-bold mr-3"></i>
                        <span className='font-bold text-xl'>{name} </span>
                    </div>
                    <div className='flex justify-between items-center border-b rounded-md  border-b-gray-500'>
                        <div className='flex items-center gap-2 px-1'>
                            <i className=" text-xl text-gray-600 fa-solid fa-flag mr-2"></i>
                            <span className='text-gray-600 '>{country}</span>
                        </div>
                        <button className='btn btn-ghost' >{playing_role}</button>
                    </div>
                    <div className=" flex flex-col mt-4 gap-3">
                        <h1 className='font-bold'>Rating {rating}</h1>
                        <div className='flex justify-between items-center'> <span className='font-bold'>{left_hand_bastman ? "left-hand-bat" : "Right-hand-bat"}</span>  <span className='text-gray-600'>{left_hand_bastman ? "left-hand-bat" : "Right-hand-bat"}</span></div>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold'>Price : $ {price}</p>
                            <button
                                className={`btn btn-ghost shadow-sm ${isSelected ? "cursor-no-drop" : ""}`}
                                onClick={() => handlePlayerData(res)}
                                disabled={isSelected}
                            >{isSelected ? "Selected" : "Choose Player"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
