import React, { useContext } from 'react'
import berry from '../assets/berry.jpg'
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';


const ProductDetails = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)

    return (
        <section>
            <div className='flex flex-col gap-14  xl:flex-row '>
                <div className='flex gap-x-2 xl:flex-1'>
                    
                    <div>
                        <img src={product.image} alt="" />
                    </div>
                </div>

                <div className='flex flex-col xl:flex-[1.8]'>
                    <h3 className=' text-3xl sm:text-5xl font-semibold text-gray-600 mb-3'>
                        {product.name}
                    </h3>
                    <div className=' flex gap-x-2 text-pink-600 items-center text-xl'>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <MdStar/>
                        <p className='text-gray-700'>(111)</p>
                    </div>
                    <div className='flex gap-x-6 text-xl font-bold my-4'>
                        <div className=' line-through'>{product.old_price}</div>
                        <div className=' text-orange-600'>{product.new_price}</div>
                    </div>
                    <div className='mb-4'>
                        <h4 className=' text-md font-bold'>
                            Select Quantity:
                        </h4>
                        <div className='flex gap-3 my-3 font-bold'>
                            <div className='ring-2 ring-slate-900 h-10 w-10 flex justify-center items-center cursor-pointer'>1KG</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flex justify-center items-center cursor-pointer'>2KG</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flex justify-center items-center cursor-pointer'>5KG</div>
                            <div className='ring-2 ring-slate-900/10 h-10 w-10 flex justify-center items-center cursor-pointer'>10KG</div>
                        </div>
                        <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                            <button onClick={()=>{addToCart(product.id)}} className='py-3 w-full ring-1 ring-slate-950 !rounded-none uppercase tracking-widest bg-transparent hover:bg-slate-900 hover:text-white '>Add to Cart</button>
                            <button className='py-3 w-ful bg-slate-800 !rounded-none uppercase tracking-widest text-white  '><div className='hover:scale-110 '>Buy Now</div></button>
                        </div>
                        <p><span className='font-semibold text-xl text-gray-700'>Category :</span>{product.category}</p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetails
