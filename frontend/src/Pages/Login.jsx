import React from 'react'

const Login = () => {
  return (
    <section className='flex justify-center items-center flex-col pt-32'>
      <div className='max-w-[555px]  h-[600px] bg-white shadow-lg m-auto px-14 py-10 rounded-md'>
        <h3 className='font-bold text-4xl text-gray-700'>
          Sign Up
        </h3>
        <div className='flex flex-col gap-4 mt-7'>
          <input type="text" placeholder='Your Name' className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl' />
          <input type="email" placeholder=' Email ' className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl' />
          <input type="password" placeholder='Enter Password ' className='h-14 w-full pl-5 bg-slate-900/10 outline-none rounded-xl'/>

        </div>
        <button className='py-3  bg-slate-900 !rounded-md text-white my-5 w-full font-bold'>Submit</button>
        <p className='text-black font-bold'>Already have a account? <span className=' text-blue-500 underline cursor-pointer'>Login</span></p>
        <div className='flex justify-center items-center mt-6 gap-3'>
          <input type="checkbox" name="" id='' />
          <p>By submitting, i agreee to the terms of use & privecy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default Login
