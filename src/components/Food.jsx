import React, {useState} from 'react'
import {Data2} from '../Data/Data2.js';


const Food = () => {
  const [food, setFood] = useState (Data2)

  //fitering categories

  const filterType = (category) =>{
      setFood(
        Data2.filter((item) =>{
          return item.category === category;
        })
      )
  }

   //fitering Prices

   const filterPrice = (price) =>{
    setFood(
      Data2.filter((item) =>{
        return item.price === price;
      })
    )
}

  return (
    <div className='max-w-[1640px] mx-auto py-12 px-4'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

      {/* Filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/*Filter type */}
        <div>
        <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
          <button onClick={() => setFood(Data2)} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
          <button onClick={() => filterType('chicken')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
          <button onClick={() => filterType('pizza')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
          <button onClick={() => filterType('burger')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
          <button onClick={() => filterType('salad')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
        </div>
        </div>
        {/*Filter price */}
        <div>
        <p className='font-bold text-gray-700'>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full'>
          <button onClick={() => filterPrice('$')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
          <button onClick={() => filterPrice('$$')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
          <button onClick={() => filterPrice('$$$')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
          <button onClick={() => filterPrice('$$$$')} className=' m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
         
        </div>
      </div>

     </div>


      {/*Display Data*/} {/* Note no return because you used ( as opposed {*/}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {food.map((item, index)=> (  
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 cursor-pointer rounded-lg'>
            <img src={item.image} alt={item.name} className='w-full h-[300px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-600 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
          )
        )}
      </div>

    </div>
  )
}

export default Food;
