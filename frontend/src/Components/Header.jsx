import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'
import Nav from '../Components/Nav'
import { MdClose, MdMenu } from 'react-icons/md';
import { BsCart4 } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { ShopContext } from '../Context/ShopContext';
import { useAuth0 } from "@auth0/auth0-react";



const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const { totalCartItems } = useContext(ShopContext);
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();


  return (


    <header className=' fixed top-0 left-0 m-auto w-full bg-white ring-1 ring-slate-900/10 shadow-sm z-10'>
      <div className='py-3 px-4 flex justify-between items-center md:px-2'>
        <div>
          <Link to='/'>

            <img src={logo} alt="logo" height={66} width={66} />
          </Link>
        </div>
        <Nav containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 font-bold"} />
        <Nav containerStyles={`${isOpen ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 mt-6 bg-white rounded-3xl shadow-xl font-bold w-64 medium-16 ring-1 ring-slate-900/20 transition-all duration-300 sm:hidden " : "flex item-start flex-col gap-y-12 fixed top-20 p-12 mt-6 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/20 shadow-xl font-bold transition-all duration-300 -right-[100%] "}`} />
        <div className='flex justify-between sm:gap-x-3 bold-16 items-center'>
          <NavLink to={'cart'} className={"flex"}><BsCart4 className='p-1 h-8 w-8 ring-slate-900/30 ' /><span className=' relative flex items-center w-5 h-5 font-bold rounded-full -top-2 '>{totalCartItems()}</span></NavLink>


          <div className='flex items-center sm:gap-x-3'>
            {!isOpen ? (<MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-green-400' onClick={toggleMenu} />) : (<MdClose className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full hover:ring-green-400 ' onClick={toggleMenu} />)}

            {/*<NavLink to={'logout'} className={'px-8 py-3 bg-green-600 rounded-full flex items-center gap-x-2  font-bold  text-white'}><SlLogout className=' h-7 w-7' />Logout</NavLink>
            <NavLink to={'login'} className={"px-8 py-3 bg-green-600 rounded-full flex items-center gap-x-2 font-bold  text-white" }><FaRegUserCircle className='h-7 w-7'/>LogIn</NavLink>*/}

            {
              isAuthenticated && (
              <img src={user.picture} alt={user.name} height={32} width={32} className='rounded-full'/>)
              
            }

            {isAuthenticated ? <button className={'px-4 py-3 bg-green-600 rounded-full flex items-center gap-x-2  font-bold  text-white'} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><SlLogout className=' h-7 w-7' />
              Log Out
            </button>
              :
              <button onClick={() => loginWithRedirect()} className={'px-4 py-3 bg-green-600 rounded-full flex items-center gap-x-2  font-bold  text-white hover:bg-blue-600'}><FaRegUserCircle className='h-7 w-7' />Log In</button>}
          </div>
        </div>

      </div>
    </header>

  )
}

export default Header
