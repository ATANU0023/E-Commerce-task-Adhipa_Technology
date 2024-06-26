import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { TbTrash } from 'react-icons/tb'
import { LiaRupeeSignSolid } from "react-icons/lia";

const CartItems = () => {
    const { totalCartAmount, allProducts, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <section className='pt-28 p-8 xl:p-32'>
            <table className=' w-full mx-auto'>
                <thead>
                    <tr className=' bg-slate-900/10 text-lg sm:text-xl text-start py-12 '>
                        <th className='p-1 py-2'>
                            Products
                        </th>
                        <th className='p-1 py-2'>Title</th>
                        <th className='p-1 py-2'>Price</th>
                        <th className='p-1 py-2'>Quantity</th>
                        <th className='p-1 py-2'>Total</th>
                        <th className='p-1 py-2'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return <tr key={e.id} className='border-b border-slate-900/20 p-6 font-medium text-gray-600 text-center'>

                                <td className='flex justify-center items-center '><img src={e.image} alt="productImg" height={43} width={43} className='rounded-md ring-1 ring-slate-900/5 my-3 ' /></td>
                                <td><div className=' line-clamp-3'>{e.name}</div></td>
                                <td>${e.new_price}</td>
                                <td>{cartItems[e.id]}</td>
                                <td className=' w-16 h-16 bg-indigo-50'><LiaRupeeSignSolid className=' h-5 w-5 inline'/>{e.new_price * cartItems[e.id]}</td>
                                <td className=' flex justify-center items-center'>
                                    <div className='text-xl '>
                                        <TbTrash onClick={() => removeFromCart(e.id)} />
                                    </div>
                                </td>
                            </tr>
                        }
                        return null;
                    })}
                </tbody>
            </table>

            <div className='flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-slate-100 w-full max-w-[666px] shadow-sm'>
             <div className='flex flex-col gap-10'>
                <h4 className=' font-bold text-xl'>
                    Summary
                </h4>
                <div>
                    <div className=' flex justify-between py-4'>
                        <h4 className=' font-medium'>Subtotal:</h4>
                        <h4 className=' text-gray-30 font-semibold'><LiaRupeeSignSolid className='h-4 w-4 inline'/>{totalCartAmount()}</h4>
                    </div>
                    <hr />
                    <div className=' flex justify-between py-4'>
                        <h4 className='font-medium'>Shipping Fee:</h4>
                        <h4 className=' text-gray-30 font-semibold'>Free</h4>
                    </div>
                    <hr />
                    <div className=' flex justify-between py-4'>
                        <h4 className=' font-bold'>Total:</h4>
                        <h4 className=' font-bold'><LiaRupeeSignSolid className=' h-4 w-4 inline'/>{totalCartAmount()}</h4>
                    </div>
                </div>
                <button className=' py-3 px-6 rounded-full w-44 bg-slate-900 text-white font-bold'>Checkout</button>
                <div className=' flex flex-col gap-10'>
                    <h4 className='font-bold text-xl text-gray-600 capitalize'>Enter Your Coupon Code:</h4>
                    <div className='flex justify-between pl-5 h-12 bg-white rounded-full ring-1 ring-slate-900/10 '>
                    <input type="text" placeholder='Coupon Code' className=' bg-transparent border-none outline-none' />
                    <button className=' py-3 px-8 bg-slate-900 text-white font-bold rounded-full'>Submit</button>
                    </div>
                </div>
             </div>
            </div>

        </section>
    )
}

export default CartItems
