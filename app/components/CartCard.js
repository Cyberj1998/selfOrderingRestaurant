'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const CartCard = () => {

  const[screenWidth,setscreenWidth]=useState()

  useEffect(()=>{
    setscreenWidth(window.innerWidth)
  },[window.innerWidth])

  return (
    <div className="bg-[#111111] h-40 max-md:h-30 w-[80%] max-md:w-[90%] m-2 max-md:m-5 shrink-0 rounded-2xl flex flex-row justify-between items-center">
      <Image 
        src='/images/meal-5.png'
        alt="product image"
        height={screenWidth <= 600 ? 120 : 150}
        width={screenWidth <= 600 ? 120 : 150}
        className="m-5 max-md:-ml-1"
      />
      <div className="h-full w-[80%] flex flex-col justify-between items-center">
        
        <div className="h-[50%] w-full flex flex-row justify-between items-start">
          <h3 className="text-white uppercase text-[20px] max-md:text-[15px] font-semibold m-2">
            Nombre del Producto
          </h3>
          <Image 
            src='/images/trash.svg'
            alt="delete icon"
            height={30}
            width={30}
            className="m-2 cursor-pointer text-white"
          />
        </div>
        
        <div className="h-[50%] w-full flex justify-between items-center">
          <p className="text-[25px] max-md:text-[15px] text-green-500 font-semibold">
            $: 1500
          </p>
          <div className="h-full w-50 max-md:w-fit flex flex-row justify-center items-center">
            <Image 
              src='/images/left.png'
              alt="left icon"
              height={60}
              width={60}
              className="m-2s cursor-pointer"
            />
            <p className="text-[#c3c3c3] font-semibold text-[25px] max-md:text-[15px] m-2">
              10
            </p>
            <Image 
              src='/images/right.png'
              alt="left icon"
              height={60}
              width={60}
              className="m-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
