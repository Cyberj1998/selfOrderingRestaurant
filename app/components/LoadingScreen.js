import Image from 'next/image'
import LoadingBar from './LoadingBar'

const LoadingScreen = () => {

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#2a2828]">
      <div className='flex flex-col justify-center items-center h-fit w-fit absolute'>
        <Image
          src='/images/burger_product_3.png'
          alt='logo'
          height={120}
          width={120}
        />
        <p className='text-[30px] font-semibold'>
          restaur<span className='text-[#20860e]'>ante</span>
        </p>
      </div>

      <LoadingBar />
    </div>
  )
}

export default LoadingScreen
