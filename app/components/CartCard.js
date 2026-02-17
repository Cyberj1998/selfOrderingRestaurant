'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import useCartStore from "../store/CartSlice"

const CartCard = ({ product }) => {
    
  const increaseQuantity = useCartStore(state=>state.increaseQuantity)
  const decreaseQuantity = useCartStore(state=>state.decreaseQuantity)
  const removeFromCart = useCartStore(state=>state.removeFromCart)
    
  const handleIncreaseQuantity = (productId) => {
    increaseQuantity(productId)
  }

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId)
  }

  const handleRemove = (productId) => {
    removeFromCart(productId)
  }

  const[screenWidth,setscreenWidth]=useState()

  useEffect(()=>{
    setscreenWidth(window.innerWidth)
  },[window.innerWidth])

  return (
    <div className="bg-[#111111] h-40 max-md:h-30 w-[80%] max-md:w-[90%] m-2 max-md:m-5 shrink-0 rounded-2xl flex flex-row justify-between items-center">
      <Image 
        src={`${product.image}`}
        alt="product image"
        height={screenWidth <= 600 ? 120 : 150}
        width={screenWidth <= 600 ? 120 : 150}
        className="m-5 max-md:-ml-1"
      />
      <div className="h-full w-[80%] flex flex-col justify-between items-center">
        
        <div className="h-[50%] w-full flex flex-row justify-between items-start">
          <h3 className="text-white uppercase text-[20px] max-md:text-[15px] font-semibold m-2">
            {product.name}
          </h3>
          <button
            onClick={()=>handleRemove(product.id)}
          >
            <Image 
              src='/images/trash.svg'
              alt="delete icon"
              height={30}
              width={30}
              className="m-2 cursor-pointer text-white"
            />
          </button>
        </div>
        
        <div className="h-[50%] w-full flex justify-between items-center">
          <p className="text-[25px] max-md:text-[15px] text-green-500 font-semibold">
            $: {product.price}
          </p>
          <div className="h-full w-50 max-md:w-fit flex flex-row justify-center items-center">
            <button 
              onClick={()=>handleDecreaseQuantity(product.id)}
            >
              <Image 
                src='/images/left.png'
                alt="left icon"
                height={60}
                width={60}
                className="m-2s cursor-pointer"
              />
            </button>
            <p className="text-[#c3c3c3] font-semibold text-[25px] max-md:text-[15px] m-2">
              {product.quantity}
            </p>
            <button
              onClick={()=>handleIncreaseQuantity(product.id)}
            >
              <Image 
                src='/images/right.png'
                alt="left icon"
                height={60}
                width={60}
                className="m-2 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
