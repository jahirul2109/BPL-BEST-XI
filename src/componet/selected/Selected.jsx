import React from 'react'

export default function Selected() {
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex-none">
                    <img className='w-14 h-14 object-cover rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQClSwmRDpmkTyB256xrS0Xkh0B-AVsb6gRlQ&s" alt="" />
                    </div>
                    <div className="flex-1 mx-3">
                        <h1 className='font-bold text-xl'>Virat kohili</h1>
                        <p className='text-gray-500'>Left-hand-bat</p>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <i className=" text-red-500 text-2xl fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
