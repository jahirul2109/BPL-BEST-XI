import React from 'react'

export default function Navbar() {
    return (
        <div className='w-10/12 mx-auto'>
            <div className="navbar shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-semibold">Logo</a>
                </div>
                <div className="flex">
                    <button className="btn btn-ghost">
                        Home
                    </button>
                    <button className="btn btn-ghost">
                        Fixture
                    </button>
                    <button className="btn btn-ghost">
                        Team
                    </button>
                    <button className="btn btn-ghost">
                        Sehedule
                    </button>
                    <button className="btn btn-ghost font-bold">
                       <span>0</span> Conis <i className="fa-solid text-amber-400 fa-coins"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
