import React from 'react'
import allProducts from '../assets/allProducts'
import Item from '../Components/Item'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const AvailableProducts = ({category}) => {
    return (

        <section className='py-28 xl:py-32 p-10'>
            <div>
                <div className='flex justify-center pt-4 text-4xl font-bold text-gray-500 md:text-6xl '>
                        <h1>AvailableProducts</h1>
                </div>
                <div className='flex justify-between my-8 mx-2 '>
                    <h5><span className=' font-bold'>Showing</span>  All products</h5>
                    <div className='flex justify-between max-sm:p-4 gap-x-4 px-4 py-3 rounded-full ring-1 ring-slate-900/15'>Sort by <MdOutlineKeyboardArrowDown /></div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-6'>
                    {allProducts.map((item) => {
                        if (item.category == 'fruits' || item.category == 'vegetables') {
                            return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                        }

                    })}
                </div>
            </div>
        </section>

    )
}

export default AvailableProducts
