import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='h-13 w-full bg-[#2a2828] flex flex-row justify-end items-center'>
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
            10
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
