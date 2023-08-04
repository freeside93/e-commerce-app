import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {RiAddFill} from 'react-icons/ri'
import { useState } from 'react'
const Main = ({ shownData, increaseCount, isMoreData, filteredData, currentBrand, itemCount, filters, setFilters,watchPopUpFunc }) => {
    const [dialFilter, setDialFilter] = useState('')
    let dialColors = []
    shownData.map(x => {
        if (!dialColors.includes(x.color)) {
            dialColors.push(x.color)
        }

    })
    console.log(dialColors)

    return (
        (shownData && <div className='flex flex-row'>
            {/* Filter comp */}
            <div className='flex flex-col w-1/5 p-2 pl-1 md:pl-3 lg:pl-10'>
                <div className='pb-2 font-bold cursor-pointer text-sm' onClick={() => { setFilters({}) }}>
                     {/* Products shower */}

                    <h1 className=''>{currentBrand.toUpperCase()}</h1>
                    <h1>WATCHES</h1>
                    <span className="font-normal text-gray-500 text-sm"><p className='pt-3'>{itemCount < filteredData.length ? itemCount : filteredData.length} / {filteredData.length} products</p></span>
                </div>
                <div className="font-semibold">
                    <h3>FILTER</h3>

                    <div className='mt-1 w-full'>
                        <div className='flex-row flex justify-between  font-medium cursor-pointer' onClick={() => {
                            setDialFilter(!dialFilter)
                        }}>
                            <span for='dial-color' className={dialFilter ? 'block text-md font-bold text-gray-700 ' : 'block text-md font-medium text-gray-700'}>Dial color</span>
                            {dialFilter ? (<MdKeyboardArrowUp size={30}> </MdKeyboardArrowUp>) : (<MdKeyboardArrowDown size={30}> </MdKeyboardArrowDown>)}

                        </div>
                        {dialFilter &&
                            <div className='text-sm cursor-pointer'>
                                <ul>
                                    {dialColors.map(color => <div className='flex flex-row justify-between'>
                                        <li onClick={() => {
                                            setFilters(prev => {
                                                const filters = { ...prev }
                                                filters.color = color
                                                return filters
                                            })
                                        }}>{color}</li>
                                        {filters.color && <AiOutlineClose className='self-center'
                                            onClick={() => {
                                                setFilters(prev => {
                                                    const filters = { ...prev }
                                                    delete filters.color
                                                    return filters
                                                })
                                            }} />}

                                    </div>)}

                                </ul>
                            </div>}
                        <div>
                            <span for='dial-color' className={dialFilter ? 'block text-md font-bold text-gray-700 ' : 'block text-md font-medium text-gray-700'}>Price</span>
                        </div>


                    </div>
                </div>
            </div>

            <div className='flex flex-col w-4/5 p-2'>
                {/* Sort comp */}
                <div className='flex justify-end pr-10'>
                    <h1>Sort</h1>
                </div>
                {/* Grid comp */}
                <div className='grid pt-6 grid-cols-2 lg:grid-cols-4 gap-5'>
                    {shownData.map((watch, i) => (
                        <div key={i} className='border shadow-lg h-80 hover:scale-105 duration-300 cursor-pointer'>
                            {/* SALE SPAN */}
                            <div className='h-10 flex flex-row justify-between '>
                                <span 
                                className={ watch.isOnSale ? "flex pl-1 text-xs border border-indigo-400 rounded-md w-1/2 md:w-1/4 m-2 text-indigo-500 font-semibold" : "invisible p-2 m-2"}>
                                    Sale 15%
                                </span>
                                <span 
                                onClick={()=>{
                                    watchPopUpFunc()
                                }}
                                className='m-2 hover:text-indigo-400'><RiAddFill size={25}/></span>
                            </div>
                            {/* WATCH IMAGE */}
                            <img className=" h-4/6 w-full object-center  object-scale-down" src={watch.img} />
                            {/* WATCH INFO */}
                            <div className='h-max p-2 pb-2 text-xs'>
                                <h3 className='font-semibold'>{watch.brand}</h3>
                                <p >{watch.model}</p>
                                <h3 className='font-semibold'>EUR {watch.isOnSale? (watch.price * 0.85).toLocaleString('en-US') : watch.price.toLocaleString("en-US")}</h3>
                            </div>
                        </div>
                    ))}


                </div>
                {isMoreData && <button className='my-4 py-2 border-2 w-2/6 justify-self-center self-center hover:border-black text-md text-blue-700 duration-300'
                    onClick={() => {
                        increaseCount()
                    }}
                >
                    MORE RESULTS</button>}
            </div>

        </div>)

    )
}

export default Main