import React, { useState, useContext } from 'react';
import NavBar from '../components/NavBar';
import { foodData } from '../Data/Fooddata';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';

function Food() {

    const [foods, setFoods] = useState(foodData);
    const { addToCart } = useContext(CartContext);

 


  return (
    <>
     <NavBar />
     <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-bblue-500 font-bold text-4xl text-center'>Pastries</h1>


    {/* Display Food images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index)=> (
            <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg relative' key={index}>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
                <div className='justify-center items-center flex flex-col px-2 py-4'>
                    <p className='font-bold pb-2 mb-2 text-sm md:text-xl'>{item.name}</p>
                    <div className='w-full flex justify-between absolute bottom-0 p-2'>
                    <p><span className='text-black font-bold text-xl p-1 rounded-full'>${item.price}</span></p>
                    <BsFillCartFill onClick={() => addToCart(item)} className='hover:text-blue-500 hover:scale-105 duration-300 cursor-pointer' size={25}/>
                    </div>
                </div>
            </div>
        ))}
      </div>


    </div>
    </>
  )
}

export default Food;