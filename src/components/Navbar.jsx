import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {MdHelp,MdFavorite} from 'react-icons/md';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {BsFillSaveFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setIsNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
    {/*left side*/}
        <div className='flex  items-center' >
            <div className='cursor-pointer'>
                <AiOutlineMenu onClick={() => setIsNav(!nav)} size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl px-2'>
                Best <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full cursor-pointer p-1 text-[14px]'>
                <p className='text-white rounded-full p-2 bg-black'>Delivery</p>
                <p className='p-2'>Pick up</p>
            </div>
        </div>
       
    {/*Search button*/}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={20} />
            <input className='bg-transparent focus:outline-none w-full p-2'  type='text' placeholder='Search food'/>
        </div>
     {/*Cart button*/}    
    <button className='bg-black text-white  py-2 rounded-full hidden md:flex items-center'>
        <BsFillCartFill size={25} className='mr-2' /> Cart
    </button>
     {/*slider nav  bar*/} 
         {/*Overlay*/} 
         {nav ? <div className='bg-black/80 w-full h-screen top-0 left-0 z-10 fixed'></div>:''}
          {/*slider nav  bar*/} 
        <div className={nav ? 'w-[300px] bg-white fixed left-0 top-0 z-10 h-screen duration-100':
         'w-[300px] bg-white fixed -left-[100%] top-0 z-10 h-screen duration-100'}>
            <AiOutlineClose size={25} onClick={() => setIsNav(!nav)} className='absolute top-4 right-4 cursor-pointer' />
            <h1 className='p-4 text-3xl'>Best <span className='font-bold'>Eats</span></h1>
           <nav>
            <ul  className='p-4 text-gray-800 flex flex-col'>
                <li><a href='/orders' className='py-4 flex text-xl'><TbTruckDelivery size={25} className='mr-2'/>Orders</a></li>
                <li><a href='/favorite' className='py-4 flex text-xl'><MdFavorite size={25} className='mr-2'/>Favorites</a></li>
                <li><a href='/wallets' className='py-4 flex text-xl'><FaWallet size={25} className='mr-2'/>Wallets</a></li>
                <li><a href='/help' className='py-4 flex text-xl'><MdHelp size={25} className='mr-2'/>Help</a></li>
                <li><a href='/promotion' className='py-4 flex text-xl'><AiFillTag size={25} className='mr-2'/>Promotions</a></li>
                <li><a href='/bestfriends' className='py-4 flex text-xl'><BsFillSaveFill size={25} className='mr-2'/>Best Friends</a></li>
                <li><a href='/invitefriends' className='py-4 flex text-xl'><FaUserFriends size={25} className='mr-2'/>Invite Friends</a></li>
            </ul>
            </nav> 
        </div>
    </div>
  )
}

export default Navbar
