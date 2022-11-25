import React from 'react'
import {MdFavorite} from 'react-icons/md';

const Footer = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <hr/>
        <div className='bg-orange-600 text-black text-center '>
        <p className='inline-flex text-sm'>Made with <MdFavorite className='mx-2 mt-1' /> by melissa &copy; 2022</p>
        </div>
    </div>
  )
}

export default Footer
