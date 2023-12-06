import React, { useState } from 'react';
import { MdHome } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { TfiLayoutSliderAlt } from "react-icons/tfi";
import { GrAppsRounded } from "react-icons/gr";

const SideNav = () => {
    const scrollbarStyles = {
        width: '3px',
        height: '4px',
        backgroundColor: '#E5E7EB',
    };

    const thumbStyles = {
        backgroundColor: '#0B64B4',
        borderRadius: '6px',

    };

    [
        {
            name: 'Dashboard',
            path: '/',
            parent: 'Apliction UI'
        },
        {
            name: 'Dashboard',
            path: '/',
            parent: 'Apliction UI'
        },
    ]

    return (
        <div>
            <div className="flex flex-col h-full p-3 bg-gray-900 text-gray-100">
                <div >

                    <div className=" border-2   w-72 border-gray-400 rounded-xl p-4">
                        <p className='mb-2 text-sm'>Search Components</p>

                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-4 text-sm border-transparent rounded-md focus:outline-none bg-gray-800 text-gray-100 " />

                    </div>
                    <div className="flex-1 w-72  mt-4 border-2 border-gray-400 rounded-xl p-4 " >

                        <div className='overflow-y-scroll  h-screen'>
                            <style>
                                {`
          ::-webkit-scrollbar {
            width: ${scrollbarStyles.width};
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${thumbStyles.backgroundColor};
            border-radius: ${thumbStyles.borderRadius};
          }
          ::-webkit-scrollbar-track {
            background-color: ${scrollbarStyles.backgroundColor};
          }
        `}
                            </style>
                            <ul className="pt-2 pb-4 pr-4 space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 rounded-sm ' />   Application UI
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Table
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Blogs
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cards
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Contacts
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cookies
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Footers
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Modals
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Navbars
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Paginations
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Auth/Sign In/Up
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="pt-2 pb-4 pr-4 space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 rounded-sm ' />   Marketing UI
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Table
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Blogs
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cards
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Contacts
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cookies
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Footers
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Modals
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Navbars
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Paginations
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Auth/Sign In/Up
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="pt-2 pb-4 pr-4 space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 rounded-sm ' />   E-Commerce
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Table
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Blogs
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cards
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Contacts
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cookies
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Footers
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Modals
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Navbars
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Paginations
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Auth/Sign In/Up
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="pt-2 pb-4 pr-4 space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 rounded-sm ' />   Core Components
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Table
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Blogs
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cards
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Contacts
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cookies
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Footers
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Modals
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Navbars
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Paginations
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Auth/Sign In/Up
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="pt-2 pb-4 pr-4 space-y-1 text-sm  ">

                                <div className='flex items-center mb-4 gap-2 text-xl font-semibold'>
                                    <GrAppsRounded className='bg-[#0B64B4] p-1 rounded-sm ' /> Dashboard
                                </div>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Table
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span></NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Blogs
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cards
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Contacts
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Cookies
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Footers
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Modals
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Navbars
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Paginations
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Auth/Sign In/Up
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                                <li className="rounded-sm">
                                    <NavLink to={'/'} name="Testimonials" aria-label="Testimonials" className="group flex justify-between rounded-md py-2 pr-4 pl-5 text-base capitalize duration-300 hover:bg-[#0B64B4] hover:text-white dark:hover:text-white text-gray-200 font-semibold dark:text-dark-text">
                                        Error Page
                                        <span className="border-0.5 flex h-[26px] min-w-[28px] items-center justify-center rounded border-[#d8dfff] bg-gray-800 px-1 pt-0.5 text-xs font-semibold text-primary duration-300 group-hover:border-white group-hover:text-[#0B64B4] group-hover:bg-white">5</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNav;