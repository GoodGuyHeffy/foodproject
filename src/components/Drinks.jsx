import React, { useState, useContext }  from 'react';
import { data } from '../Data/Data';
import { BsFillCartFill } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';



function Drinks() {


  const { addToCart } = useContext(CartContext);

 //console.log(data)

  const [drinks, setDrinks] = useState(data);


 //Filter Type coffee
 const filterType = (category) => {
    setDrinks(
        data.filter((item) => {
            return item.category === category;
        })
    );
 };



  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-bblue-500 font-bold text-4xl text-center'>Coffee and Tea</h1>


       {/*Filter Items Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        
        {/*Filter Type Row*/}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={()=> setDrinks(data)} className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-1 duration-200'>All</button>
            <button onClick={() => filterType('dripcoffee')} className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-1 duration-200'>Drip Coffee</button>
            <button onClick={() => filterType('specialty')} className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-1 duration-200'>Specialty</button>
            <button onClick={() => filterType('iced')} className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-1 duration-200'>Iced</button>
            <button onClick={() => filterType('tea')} className='border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white m-1 duration-200'>Tea</button>
          </div>
        </div>

      </div>

    {/* Display drink images */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {drinks.map((item, index)=> (
            <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg relative' key={index}>
            <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
            <div className='justify-center items-center flex flex-col px-2 py-4'>
                <p className='font-bold pb-2 mb-2 text-sm md:text-xl'>{item.name}</p>
                <div className='w-full flex justify-between absolute bottom-0 p-2'>
                <p><span className='text-black font-bold text-xl p-1 rounded-full'>${item.price}</span></p>
                <BsFillCartFill onClick={() => addToCart(item)} className='hover:text-blue-900 hover:scale-105 duration-300 cursor-pointer' size={22}/>
                </div>
            </div>
        </div>
        ))}
      </div>


    </div>
  )
}

export default Drinks;