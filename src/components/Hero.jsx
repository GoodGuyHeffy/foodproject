import React from 'react';

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
       <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] rounded-xl bg-black/40 flex flex-col justify-center'>
         <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Smith <span className='text-sky-500'>Bros.</span></h1>
         <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-sky-500'>Coffee</span> House</h1>
       </div>
       <img className='w-full max-h-[500px] object-cover rounded-xl' src="https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero Coffee"/>
      </div>
    </div>
  )
}

export default Hero;