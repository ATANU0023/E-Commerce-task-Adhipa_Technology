import React from 'react'
import { MdOutlineLocalOffer, MdStar } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import {FaStar} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-no-repeat h-screen w-full bg-cover ">
        <div className=' py-52 p-6 top-32 sm:top-52 sm:px-10'>
            <h1 className=' font-extrabold text-7xl text-green-500 max-w-[52rem]'>
                Fruit and Veggies mart online
            </h1>
            <p className='text-gray mt-6 font-semibold max-w-[32rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae voluptatem ipsum a molestiae velit consequuntur quaerat dolorem adipisci officia commodi, alias quidem dolores?</p>
            <div className='flex flex-start items-center gap-x-4 my-10'>
                <div className=' flex items-center gap-x-3'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <div className='font-bold sm:font-semibold '>200k <span className=''>Excellent Reviews</span></div>

            </div>
            <div className='flex   gap-4 '>
                <NavLink to={'/Shop Now'} className={"px-8 py-3 bg-slate-700 rounded-full text-white font-bold items-center"}>
                    Shop Now
                </NavLink>
                <NavLink to={''} className={"px-8 py-3 bg-slate-700 rounded-full text-white font-bold items-center justify-center flex gap-2"}><MdOutlineLocalOffer className='text-2xl'/>
                    Offers
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero
