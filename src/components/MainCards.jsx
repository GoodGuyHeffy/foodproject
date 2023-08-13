import React from 'react';

function MainCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Who's hungry for a deal?</p>
              <p className='px-2 font-bold'>BOGO's Out Through 08/01/2023</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
        </div>



         {/* Card */}
         <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>Best Sushi Spots</p>
              <p className='px-2 text-2xl font-bold'>In Town!</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/8518854/pexels-photo-8518854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
        </div>



         {/* Card */}
         <div className='rounded-xl relative'>
            {/* Card Overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
              <p className='px-2 font-bold text-2xl'>Near You!</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
            </div>
            <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"/>
        </div>

    </div>
    
  )
}

export default MainCards;