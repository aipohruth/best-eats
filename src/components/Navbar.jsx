import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/*left side*/}
        <div className='flex  items-center' >
            <div className='cursor-pointer'>
                <AiOutlineMenu size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='text-white rounded-full p-2 bg-black'>Delivery</p>
                <p className='p-2'>Pick up</p>
            </div>
        </div>
       
    {/*Search button*/}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} />
            <input className='bg-transparent focus:outline-none w-full p-2'  type='text' placeholder='Search food'/>
        </div>
    




    </div>
  )
}

export default Navbar
