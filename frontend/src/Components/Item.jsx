import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, old_price, new_price }) => {
    return (
        <div className='rounded-xl overflow-hidden shadow-lg  '>
            <div className='relative flex group justify-center transition-all duration-100 items-center overflow-hidden'>
                <Link to={`/product/${id}`} className=' h-12 w-12   bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'><FaSearch className='hover:rotate-90 hover:scale-125 transition-all duration-200'/></Link>
                <img onClick={window.scroll(0, 0)} src={image} alt='productImage' className='w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>

            </div>
            <div className='p-4 overflow-hidden'>
                <h4 className='my-[6px] font-bold text-xl text-gray-600 line-clamp-2'>{name}</h4>
                <div className='flex gap-x-5'>
                    <div className=' font-bold text-xl'>{new_price}</div>
                    <div className='font-bold text-orange-400 text-xl line-through'>{old_price}</div>
                </div>
            </div>
        </div>
    )
}

export default Item
