import React from 'react'
import { NavLink } from 'react-router-dom';
import {MdHomeFilled} from 'react-icons/md'
import { GiFruitBowl, GiShinyApple } from "react-icons/gi";
import {FaCarrot} from 'react-icons/fa';


const Nav = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={'/'} className={({isActive})=> isActive ? " text-blue-600 relative flex-1 after:w-full after:h-[1px] after:bg-blue-600 after:absolute after:-bottom-3 after:right-0 text-xl" : ""}><div className='flex items-center gap-x-1'><MdHomeFilled/>Home</div></NavLink>
      <NavLink to={'/Fruits'} className={({isActive})=> isActive? " text-blue-600 relative flex-1 after:w-full after:h-[1px] after:bg-blue-600 after:absolute after:-bottom-3 after:right-0 text-xl" : ""}><div className='flex items-center gap-x-1'><GiShinyApple />Fruits</div></NavLink>
      <NavLink to={'/Vegitables'} className={({isActive})=> isActive? " text-blue-600 relative flex-1 after:w-full after:h-[1px] after:bg-blue-600 after:absolute after:-bottom-3 after:right-0 text-xl" : ""}><div className='flex items-center gap-x-1'><FaCarrot />Vegitables</div></NavLink>
      {/*<NavLink to={'/Fruit & Veggies'} className={({isActive})=> isActive? " text-blue-600 relative flex-1 after:w-full after:h-[1px] after:bg-blue-600 after:absolute after:-bottom-3 after:right-0 text-xl" : ""}><div className='flex items-center gap-x-1'><GiFruitBowl />Fruit & Veggies</div></NavLink>*/}
    </nav>
  )
}

export default Nav
