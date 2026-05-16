import React from 'react'

export default function Selected({selected , setSelected , playerData , selectedRemoveHandleing , coin , setCoin}) {
    const { img , id , name , left_hand_bastman} = playerData ;
    const removeHandle = (player) => {
        selectedRemoveHandleing(player);
        setCoin ( pre => pre + player.price)
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex-none">
                    <img className='w-14 h-14 object-cover rounded-md' src= {img} alt= {name} />
                    </div>
                    <div className="flex-1 mx-3">
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <p className='text-gray-500'>{left_hand_bastman ? "Left-hand-bat" : "Right-hand-bat"}</p>
                    </div>
                    <div className="flex-none">
                        <button onClick={()=> removeHandle(playerData)} className="btn btn-square btn-ghost">
                            <i className=" text-red-500 text-2xl fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
