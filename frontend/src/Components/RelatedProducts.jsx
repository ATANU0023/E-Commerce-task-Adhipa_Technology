import React from 'react'
import Item from './Item'
import Fresh from '../assets/Fresh'

const RelatedProducts = () => {
  return (
    <section className='bg-white'>
        <div className='px-10 py-10  xl:w-[100%]'>
            <h3 className=' text-center text-4xl font-bold mb-6 text-gray-500'>Similar Products</h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16' />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-6'>
                {Fresh.map((item)=>(
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts
