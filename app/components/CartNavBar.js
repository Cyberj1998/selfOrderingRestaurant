import Image from 'next/image'
import Link from 'next/link'

const CartNavBar = () => {
  return (
    <div className='h-12.5 w-full bg-[#2a2828] flex flex-row justify-between items-center'>
      <Link
        href='/shop'
      >
        <Image 
          src='/images/left.png'
          alt='back icon'
          height={10}
          width={10}
          className='h-10 w-10 cursor-pointer ml-5'
        />
      </Link>
      <h3 className='text-[20px] text-white font-semibold'>
        Mi Carrito
      </h3>
      <Image 
        src='/images/cart.png'
        alt='cart icon'
        height={10}
        width={10}
        className='h-10 w-10 cursor-pointer mr-5'
      />
    </div>
  )
}

export default CartNavBar
