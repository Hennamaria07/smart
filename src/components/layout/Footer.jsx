import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#043E44] dark:bg-[#043E44]">
                <div className=" w-full border-none">
                    <div className="grid sm:grid-cols-2 gap-8 md:px-32 px-16 sm:px-20 py-6 lg:py-8 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-xl font-bold text-slate-200">Exclusive</h2>
                            <h2 className="mb-6  font-semibold text-slate-200">Subscribe</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to={"/"} className=" hover:underline  text-slate-300">Get 10% off your first order</Link>
                                </li>
                                <li className="mb-4">
                                    <div className="relative text-gray-600">
                                        <input type="email" className="bg-purple-white shadow rounded border-0 w-full h-10 px-3" placeholder="Enter your email" />
                                        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
                                            <span className="material-symbols-outlined">
                                                send
                                            </span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-slate-200 uppercase">Support</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">support@gmail.com</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">+91-9876054321</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6  font-semibold uppercase text-slate-200">Account</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">My Account</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Login / Register</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Cart</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Wishlist</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Shop</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-semibold uppercase text-slate-200">Quick Link</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Terms Of Use</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">FAQ</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to={"/"} className="hover:underline text-slate-300">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className=" py-4 border-t border-white bg-[#043E44] dark:bg-[#043E44] md:flex md:items-center md:justify-center">
                        <span className="text-sm text-slate-300 sm:text-center">© 2023 <Link to={"https://flowbite.com/"}>Flowbite™</Link>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
  )
}

export default Footer