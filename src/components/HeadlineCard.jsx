import React from 'react';


const HeadlineCard = ({infos}) => {
   
  return (
    <>
    <div className='max-w-[1640px} mx-auto p-4 py-12 grid   md:grid-cols-3 gap-6'>
    {infos.map((info, id) =>{
        const {image, title, text} = info;
        return (<div  key={id} className='rounded-xl relative' >
           <div  className='w-full h-full absolute bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>{title}</p>
                <p className='px-2'>{text}</p>
                <button className='absolute border-white  bg-white text-black mx-4 bottom-4 hover:bg-orange-500 hover:border-orange-500'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl' src={image} alt='food' />
  
   
     </div>
 ) })}
  
      </div>
    
   
    </>
  )
}

export default HeadlineCard;
