import React from 'react'

export default function Mailbox() {
    return (
        <div className='relative border-2 text-gray-800 border-white  p-6 rounded-2xl overflow-hidden top-40 bg-white/20 backdrop-blur-md z-10 w-10/12 mx-auto'>
            <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-sky-300 blur-3xl opacity-40"></div>
            <div className="absolute -right-20 top-0 h-60 w-60 rounded-full bg-yellow-300 blur-3xl opacity-40"></div>
            <div className='flex flex-col justify-center gap-4 items-center w-full  bg-white py-20 rounded-2xl mx-auto'>
                <div className='w-6/12 text-center'>
                    <h1 className='font-bold text-3xl'>Subscribe to Our Newsletter</h1>
                    <p className='font-semibold text-gray-500 text-xl'>Get the latest Updates and news right in your inbox</p>
                </div>
                <div className=" w-8/12 flex justify-center items-center">
                    <input className="input outline-none border border-gray-500 mr-2 bg-white placeholder:text-gray-500 w-8/12 join-item" placeholder="Email" />
                    <button className="btn join-item w-2/12 bg-linear-to-r from-orange-300 to-pink-400 border-none ">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
