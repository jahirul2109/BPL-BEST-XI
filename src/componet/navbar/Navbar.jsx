import React from 'react'
import logo from "../../assets/bpl-logo.png"

export default function Navbar({ coin }) {
    return (
        <div className='md:w-10/12 w-11/12 mx-auto my-4 '>
            <div className="navbar shadow-sm">
                <div className="flex-1">
                    <a className="cursor-pointer"><img src={logo} alt="" /></a>
                </div>
                <div className=" hidden md:flex">
                    <button onClick={() => { window.location.href = './index.html' }} className="btn btn-ghost">
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
                        <span> {coin}</span> Conis <i className="fa-solid text-amber-400 fa-coins"></i>
                    </button>
                </div>
                <div className=' dropdown dropdown-end md:hidden'>
                    <button className="btn btn-ghost font-bold">
                        <span> {coin}</span> Conis <i className="fa-solid text-amber-400 fa-coins"></i>
                    </button>
                    <button className="btn " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <ul className="dropdown menu w-52 rounded-box right-0  bg-white/20 backdrop-blur-md shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                        <li><a onClick={() => window.location.href = "./index.html"}>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Team</a></li>
                        <li><a>Sehedule</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
