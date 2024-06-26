import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20 '>
      <div className=' flex gap-3 mb-4'>
        <button className='py-2 px-6 bg-slate-800 text-white font-bold !Py-[6px] w-36'>Description</button>
        <button className='py-2 px-6 ring-1 ring-slate-900 hover:bg-slate-900 hover:text-white  font-bold !Py-[6px] w-36'>Benifits</button>
        <button className='py-2 px-6 ring-1 ring-slate-900 hover:bg-slate-900 hover:text-white   font-bold !Py-[6px] w-36'>Company</button>
      </div>
      <div className=' flex flex-col pb-16'>
        <p className='text-sm '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam dolores deserunt debitis eligendi ipsa similique perferendis aspernatur voluptatum nam ut. Eligendi necessitatibus dolore numquam, sed nisi deserunt sit inventore dolor assumenda magni, reiciendis aperiam et maxime dolorum. Adipisci, est. Facere perspiciatis natus quisquam nulla cum!</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci cupiditate, vitae eveniet porro soluta eaque debitis consequuntur distinctio saepe eius doloribus atque?</p>
      </div>
    </div>
  )
}

export default ProductDescription
