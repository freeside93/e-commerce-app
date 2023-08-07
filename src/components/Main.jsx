import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { RiAddFill } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'
const Main = ({ shownData, increaseCount, isMoreData, filteredData, currentBrand, itemCount, filters, setFilters, watchPopUpFunc, setSorting, sorting }) => {
    const [dialFilter, setDialFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    const [open, setOpen] = useState(false)
    let dialColors = []
    shownData.map(x => {
        if (!dialColors.includes(x.color)) {
            dialColors.push(x.color)
        }
    })
   

    return (
        (shownData && <div className='flex flex-row'>
            {/* Filter comp */}
            <div className='flex flex-col w-1/5 p-2 pl-1 md:pl-3 lg:pl-10'>
                <div className='pb-2 font-bold text-sm' onClick={() => { setFilters({}) }}>
                    {/* Products shower */}

                    <h1 className=''>{currentBrand.toUpperCase()}</h1>
                    <h1>WATCHES</h1>
                    <span className="font-normal text-gray-500 text-sm">
                        <p className='pt-3'>{itemCount < filteredData.length ? itemCount : filteredData.length} / {filteredData.length} products</p></span>
                </div>
                <div className="font-semibold">
                    <h3>FILTER</h3>
                    {/* FILTERS */}
                    <div className='mt-1 w-full'>
                        <div className='flex-row flex justify-between  font-medium cursor-pointer' onClick={() => {
                            setDialFilter(!dialFilter)
                        }}>
                            {/* DIAL FILTER */}
                            <span
                                htmlFor='dial-color'
                                className={dialFilter ? 'block text-md font-bold text-gray-700 ' : 'block text-md font-medium text-gray-700'}>
                                Dial color</span>
                            {dialFilter ? (<MdKeyboardArrowUp size={30}> </MdKeyboardArrowUp>) : (<MdKeyboardArrowDown size={30}> </MdKeyboardArrowDown>)}

                        </div>
                        {dialFilter &&
                            <div className='text-sm cursor-pointer'>
                                <ul>
                                    {dialColors.map((color,i) => <div key={i} className='flex flex-row justify-between'>
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
                        {/* PRICE FILTER */}
                        <div className='flex-row flex justify-between  font-medium cursor-pointer'
                            onClick={() => {
                                setPriceFilter(!priceFilter)
                            }}>

                            <span
                                htmlFor='dial-color'
                                className={priceFilter ? 'block text-md font-bold text-gray-700 ' : 'block text-md font-medium text-gray-700'}>Price</span>
                            {priceFilter ? (<MdKeyboardArrowUp size={30}> </MdKeyboardArrowUp>) : (<MdKeyboardArrowDown size={30}> </MdKeyboardArrowDown>)}

                        </div>
                        {priceFilter && (
                            <>
                                {/* Low price filter */}
                                <div className='w-full flex-col content-between'>
                                    <label className='w-2/6 text-sm pr-1'>From</label>
                                    <div className='w-full flex content-between'>
                                        <input
                                            onChange={(e) => {
                                                setFilters((prevValues) => {
                                                    const theFilters = { ...prevValues }
                                                    theFilters.priceLow = e.target.value
                                                    return theFilters
                                                })
                                            }}
                                            value={filters.priceLow}
                                            className='w-4/6 border-2' id='priceLow' name='priceLow' type='number'></input>
                                        <span>€</span>
                                        {filters.priceLow !== 0 &&
                                            <AiOutlineClose
                                                onClick={() => {
                                                    setFilters((prevValues) => {
                                                        const theFilters = { ...prevValues }
                                                        theFilters.priceLow = 0;
                                                        return theFilters
                                                    })
                                                }}
                                                className='self-center w-1/6 cursor-pointer'></AiOutlineClose>}
                                    </div>
                                </div>
                                {/* High price filter */}
                                <div className='w-full flex-col mt-1 content-between'>
                                    <label className='w-1/6 text-sm pr-1'>To</label>
                                    <div className='w-full flex content-between'>
                                        <input
                                            onChange={(e) => {
                                                setFilters((prevValues) => {
                                                    const theFilters = { ...prevValues }
                                                    theFilters.priceHigh = e.target.value
                                                    return theFilters
                                                })
                                            }}
                                            value={filters.priceHigh}
                                            className='w-4/6 border-2' id='priceHigh' name='priceHigh' type='number'></input>
                                        <span>€</span>
                                        {filters.priceHigh !== 1000000 &&
                                            <AiOutlineClose
                                                onClick={() => {
                                                    setFilters((prevValues) => {
                                                        const theFilters = { ...prevValues }
                                                        theFilters.priceHigh = 1000000;
                                                        return theFilters
                                                    })
                                                }}
                                                className='self-center w-1/6 cursor-pointer'></AiOutlineClose>}
                                    </div>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div>

            <div className='flex flex-col w-4/5 p-2'>
                {/* Sort comp */}
                <div className='flex justify-end cursor-pointer' onClick={() => setOpen(!open)}>
                    <h1 className='text-md'>Sort</h1>
                    <div className="w-1/3 font-medium h-10 items-end">
                        <div
                            className={`bg-white w-1/3 p-2 flex items-center  justify-between rounded`}
                        // ${
                        //   !selected && "text-gray-700"
                        // }`

                        >

                            <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
                        </div>
                        <ul
                            className={`bg-white mt-2 overflow-y-auto z-20 relative  ${open ? "max-h-60 border-2" : "max-h-0"
                                } `}
                        >
                            <div className="flex items-center px-2  top-0 z-200 bg-white">

                            </div>
                            <li className={`p-2 border-b-[1px] text-sm hover:bg-sky-600 hover:text-white ${sorting === 'a-z' && 'bg-sky-600'}`}
                                onClick={() => {
                                    setSorting('a-z')
                                }}
                            >
                                Brand (A-Z)
                            </li>
                            <li className={`p-2 border-b-[1px] text-sm hover:bg-sky-600 hover:text-white ${sorting === 'z-a' && 'bg-sky-600'}`}
                                onClick={() => {
                                    setSorting('z-a')
                                }}
                            >
                                Brand (Z-A)
                            </li>
                            <li className={`p-2 border-b-[1px] text-sm hover:bg-sky-600 hover:text-white ${sorting === 'priceLow' && 'bg-sky-600'}`}
                                onClick={() => {
                                    setSorting('priceLow')
                                }}
                            >
                                Price (low-high)
                            </li>
                            <li className={`p-2 border-b-[1px] text-sm hover:bg-sky-600 hover:text-white ${sorting === 'priceHigh' && 'bg-sky-600'}`}
                                onClick={() => {
                                    setSorting('priceHigh')
                                }}
                            >
                                Price (high-low)
                            </li>

                        </ul>
                    </div>
                </div>
                {/* Grid comp */}
                <div className='grid pt-6 grid-cols-2 lg:grid-cols-4 gap-5'>
                    {shownData.map((watch, i) => (
                        <div key={i} className='border shadow-lg h-80 hover:scale-105 duration-300 cursor-pointer'>
                            {/* SALE SPAN */}
                            <div className='h-10 flex flex-row justify-between '>
                                <span
                                    className={watch.isOnSale ?
                                        "flex pl-1 text-xs border border-indigo-400 rounded-md w-1/2 md:w-1/4 m-2 text-indigo-500 font-semibold"
                                        : "invisible p-2 m-2"}>
                                    Sale 15%
                                </span>
                                <span
                                    onClick={() => {
                                        watchPopUpFunc()
                                    }}
                                    className='m-2 hover:text-indigo-400'><RiAddFill size={25} /></span>
                            </div>
                            {/* WATCH IMAGE */}
                            <img className=" h-4/6 w-full object-center  object-scale-down" src={watch.img} />
                            {/* WATCH INFO */}
                            <div className='h-max p-2 pb-2 text-xs'>
                                <h3 className='font-semibold'>{watch.brand}</h3>
                                <p >{watch.model}</p>
                                <h3 className='font-semibold'>EUR {watch.price.toLocaleString("en-US")}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {shownData.length < 1 &&
                    <div className='flex flex-col text-center justify-center text-xl font-semibold text-indigo-400'>
                        <h1 className='mt-10'>Sorry, but it seems there are no watches matching your criteria.</h1><br></br>
                        <h1 className=''>Why don`t you try changing those filters?</h1>
                    </div>}
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