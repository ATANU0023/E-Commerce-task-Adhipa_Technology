import React from 'react'
import  Fresh  from '../assets/Fresh'
import Item from './Item'

const FreshProducts = () => {
  return (
    <section className='bg-white'>
        <div className='px-10 py-12 xl:py-28 xl:w-[100%]'>
            <h3 className=' text-center text-4xl font-bold mb-6 text-gray-500'>Fresh Organic Fruit & Vegetables</h3>
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

export default FreshProducts
