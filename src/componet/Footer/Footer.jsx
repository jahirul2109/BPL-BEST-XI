import React from 'react'
import Mailbox from '../Mailbox'

export default function Footer() {
    return (
        <div className='bg-gray-800 relative pt-20 pb-10  bottom-1'>
            <footer className="footer sm:footer-horizontal mt-32 mb-2 grid grid-cols-3  md:grid-cols-4 w-full md:w-10/12 mx-auto text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className=' col-span-3 w-full'>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="w-80 ">
                        <label>Enter your email address</label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered bg-white outline-none join-item" />
                            <button className="btn btn-primary join-item bg-linear-to-r from-orange-300 to-pink-400 border-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            <hr className='text-gray-500' />
            <h1 className='text-center text-gray-600 flex items-center justify-center my-2'>@2026 Sports Menia All Right Reserved</h1>
        </div>
    )
}
