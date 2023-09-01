import React from 'react';
import NavBar from '../components/NavBar';
import MapImg from '../assets/map1.png';


function Locations() {
  return (
    <>
    <NavBar />
    <div>
      <div className=' flex flex-col md:grid md:grid-cols-2 my-12'>
        <div className='flex flex-col justify-center items-center mx-8 rounded-lg bg-slate-200'>
        <p className='font-bold justify-center text-sm md:text-xl'>Port Washington, WI</p>
        <p className='text-4xl md:text-5xl justify-center items-center mx-auto px-4'>Smith Bros.</p>
        <p className='text-4xl md:text-5xl justify-center items-center mx-auto px-4'>Coffee House</p>
        <p className='font-bold text-sm md:text-base'>100 N Franklin St, Port Washington, WI</p>
        </div>
        <div className='mx-2 p-4 text-xl'>
          <p>Anyone in Port Washington old enough to remember the old Smith Bros. Fish Shanty Restaurant will remember the crowds of locals and tourists that came by the busloads to eat there for decades.
          Of course, you'll also find traditional café fare including pastries, bagels and juice, cookies, coffee, sodas and sandwiches. Enjoy them by the fireplace, with historical photos on the wall, a view of Lake Michigan's prettiest marina right outside the window.
          It's truly a taste of Port Washington, past and present, and it's only at Smith Bros. Coffee House.</p>
          
        </div>
      </div>
      <div>
        <img className='w-full h-[300px] md:h-[450px] object-cover' src={MapImg} alt="/"/>
      </div>
      <div className='grid grid-cols-1 md:flex md:justify-between bg-slate-200 md:pb-12'>
        <div className='px-4 justify-center items-center flex'>
          <p className='text-base md:text-3xl md:px-6 md:py-4'>100 N Franklin St, Port Washington, WI <br /><span className='flex justify-center items-center'>United States, 53074</span></p>
        </div>
        <div className='px-4 justify-center items-center flex'>
          <p className='text-base p-2 md:text-3xl'>+1 262-268-2767</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Locations;