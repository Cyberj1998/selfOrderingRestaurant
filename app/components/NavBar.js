'use client'
import Image from 'next/image'
import Link from 'next/link'
import useCartStore from '../store/CartSlice'
import { useEffect, useState } from 'react'

const NavBar = () => {

  const getTotalQuantity = useCartStore(state=>state.getTotalQuantity)  
  const cart = useCartStore(state=>state.cart)

  const[totalQuantity,setTotalQuantity]=useState(0)

  useEffect(()=>{
    setTotalQuantity(getTotalQuantity())
  },[cart])

  return (
    <div className='h-13 w-full flex fixed top-0  bg-transparent backdrop-blur-[5px] z-50 flex-row justify-end items-center'>
      <Link 
       href='/cart'
       className='rounded-2xl p-1 bg-[#363535] w-fit h-12 max-md:h-10 flex flex-row justify-center items-center mr-5'
      >
        <div className='flex flex-row justify-center items-center relative'>
          <Image 
            src='/images/cart.png'
            alt='cart icon'
            height={50}
            width={50}
            className='h-10 max-md:h-8 w-10 max-md:w-8'
          />
          <p className='text-[20px] text-green-500 font-bold absolute -top-2 -right-1'>
            {totalQuantity}
          </p>
        </div>
        <p className='text-[20px] max-md:text-[15px] text-white font-semibold m-1'>
          Carrito
        </p>
      </Link>
    </div>
  )
}

export default NavBar
