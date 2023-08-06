import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { brands } from '../data.js/data'

const Header = ({ categoryPicker, currentBrand, setCurrentBrand, watchAddedSoon }) => {

    const [drawer, setDrawer] = useState(false)

    return (
        <div className="sticky top-0 z-30 flex flex-col bg-white border-b border-b-gray-400">
            <div className="flex flex-row justify-between px-4 ">
                <div className='flex flex-row'>
                    {/* Nav for small screens */}
                    <AiOutlineMenu size={30} className="m-6 md:m-2 cursor-pointer lg:hidden" onClick={() => { setDrawer(!drawer) }} />
                    <img className="cursor-pointer " src="https://www.bucherer.com/on/demandware.static/-/Library-Sites-BuchererLibrary/default/dw06e61b03/img/logo/bucherer-logo-big.svg" />

                </div>
                <div className="flex flex-col w-1/6  justify-center items-center">
                    <iframe className="hidden lg:inline-flex w-44 h-20" src="https://static.rolex.com/retailers/clock/?colour=gold&apiKey=8da6638add60d65135bc7c3ce1da60b0&lang=en" />
                    <CiUser size={28} className='m-6 md:m-2 cursor-pointer' />
                </div>

            </div>
            {/* Navigation for big screens */}
            <div className="hidden lg:flex flex-row  justify-center items-center">
                <h2 className={currentBrand === 'all' ? 'cursor-pointer pr-4 text-xl' : 'cursor-pointer pr-4'} onClick={() => {
                    setDrawer(false)
                    setCurrentBrand('all')
                }}
                >All Watches</h2>
                {brands && brands.map((brand, i) => (
                    <h3 key={i} className={currentBrand === brand.name ? 'cursor-pointer pr-4 text-xl' : 'cursor-pointer pr-4'}
                        onClick={() => {
                            setCurrentBrand(brand.name)
                            setDrawer(false)
                        }}
                    >{brand.name}</h3>
                ))}


            </div>
            {/* Overlay */}
            {drawer && <div>
                <div className="bg-black/50 fixed w-full h-screen z-10 top-0 left-0 lg:hidden duration-900"></div>
                {/* Side drawer */}
                <div className="fixed flex flex-col top-0 left-0 w-full md:w-1/3 lg:hidden h-screen bg-white z-10 ">
                    <div>
                        <iframe className=" absolute right-2 inline-flex w-44 h-20" src="https://static.rolex.com/retailers/clock/?colour=gold&apiKey=c2e7f82d72c0f575d2d245fc21053b03&lang=en" />
                        
                        
                        <AiOutlineClose size={25} className='absolute left-2 top-2 cursor-pointer' onClick={() => { setDrawer(!drawer) }} />
                    </div>
                    <div className="mt-[80px] pl-[40px] duration-900">
                        <nav>
                            <ul>
                                <li className={currentBrand === 'all' ? 'cursor-pointer pr-4 text-xl' : 'cursor-pointer pr-4'} onClick={() => {
                                    setCurrentBrand('all')
                                    setDrawer(false)
                                }}
                                >All Watches</li>
                                {brands && brands.map((brand, i) => (
                                    <li key={i} className={currentBrand === brand.name ? 'cursor-pointer pr-4 text-xl' : 'cursor-pointer pr-4 '}
                                        onClick={() => {
                                            setCurrentBrand(brand.name)
                                            setDrawer(false)
                                        }}
                                    >{brand.name}</li>
                                ))}

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>}
            {<div className={watchAddedSoon ? "border-t-2 self-center p-2 transition-transform duration-300 text-indigo-500 text-xl" : "hidden"}><h1>Watch added to cart</h1></div>}
        </div>
    )
}

export default Header