import React, { useState, useContext } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { GiDonut } from 'react-icons/gi';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BiCoffeeTogo } from 'react-icons/bi';
import  CartContext  from '../Context/CartContext';


function NavBar() {

  const [nav, setNav] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [toggle, setToggle] = useState(true);
 
  const togglePickup = () => {
    setToggle(true);
  }

  const toggleDelivery = () => {
    setToggle(false);
  }

  return (

    <div className='max-w-screen mx-auto flex justify-between items-center p-4'>


        {/*left side menu */}


      <div className='flex items-center'>
          <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30} />
          </div>
        <Link to="/"><img className='w-[100px] px-4' src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/352554690_1057014208608121_7149297418506603569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Xt-JXc1znzEAX8mKuUx&_nc_ht=scontent-iad3-2.xx&oh=00_AfCoR0A9XiBJuQccbDnC7qrjKEEKpRNFe9o0vS9JmBWdcw&oe=64F7E21E" alt="logo"/></Link>

        <div>
          {toggle ? (<div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <button  className='bg-blue-500 border-none text-white rounded-full p-2'>Delivery</button>
              <button onClick={toggleDelivery} className='p-2 border-none duration-300'>Pickup</button>
            </div>) : (<div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
              <button onClick={togglePickup} className='p-2 border-none duration-300'>Delivery</button>
              <button className='p-2 bg-blue-500 border-none text-white rounded-full'>Pickup</button>
            </div>)}
            
        </div>

      </div>

      {/* Search input */}
 
       <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} onClick={() => setNav(!nav)}/>
        <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search Coffee'>
        </input>
       </div>
         
         {/* Cart Button */}

         <Link to='/cart'><button className='bg-black text-white hidden md:flex items-center py-2 rounded-full hover:bg-blue-500 border-none'>
            <BsFillCartFill size={20} className='mr-2'/> {cartItems.length}
         </button></Link>

   {/* Mobile Menu */}


       {/* OverLay */}

    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


  
     {/* Side drawer Menu */}

         <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'  onClick={()=> setNav(!nav)}/>
          <img className='w-[100px] p-4' src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/352554690_1057014208608121_7149297418506603569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Xt-JXc1znzEAX8mKuUx&_nc_ht=scontent-iad3-2.xx&oh=00_AfCoR0A9XiBJuQccbDnC7qrjKEEKpRNFe9o0vS9JmBWdcw&oe=64F7E21E" alt="logo"/>
           
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <Link to='/'><li className='text-xl py-4 flex'><AiFillHome size={25} className='mr-4'/>Home</li></Link>
                    <Link to='/cart'><li className='text-xl py-4 flex'><BsFillCartFill size={25} className='mr-4'/>Cart</li></Link>
                    <Link to='/favorites'><li className='text-xl py-4 flex'><BiCoffeeTogo size={25} className='mr-4'/>Drinks</li></Link>
                    <Link to='/food'><li className='text-xl py-4 flex'><GiDonut size={25} className='mr-4'/>Food</li></Link>
                    <Link to='/locations'><li className='text-xl py-4 flex'><MdOutlineLocationSearching size={25} className='mr-4'/>Locations</li></Link>
                </ul>
            </nav>
         </div>

    </div>
  )
}

export default NavBar;