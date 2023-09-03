import React from 'react';
import { Link } from 'react-router-dom';

function MainCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Scrumptious Desserts!</p>
              <Link to='/food'><button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold hover:bg-blue-900 hover:text-white hover:scale-105 duration-300 border-none'>View Menu</button></Link>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1601839922389-8858f24e7011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="/"/>
        </div>



         {/* Card */}
         <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Delicious Coffee!</p>
              <Link to='favorites'><button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold hover:bg-blue-900 hover:text-white hover:scale-105 duration-300 border-none'>View Menu</button></Link>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" alt="/"/>
        </div>


    </div>
    
  )
}

export default MainCards;