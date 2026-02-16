import Image from "next/image"

const DiscountSection = () => {
  return (
    <div className='h-75 max-md:h-37.5 w-[85%] mt-5 bg-linear-to-r from-[#0e9753] to-[#59e1a9] rounded-[50px] flex flex-row justify-evenly items-center p-5'>
      <div className='flex flex-col justify-center items-start'>
        <h3 className='uppercase text-[120px] max-md:text-[50px] text-white font-semibold'>%20</h3>
        <h2 className='uppercase text-[40px] max-md:text-[15px] text-white font-semibold'>Oferta - Mas Barata aqui</h2>
      </div>
      <Image 
        src='/images/producto-Cerveza.png'
        alt="discount product"
        height={50}
        width={50}
        className="h-90 max-md:h-50 w-80 max-md:w-50 -rotate-10"
      />
    </div>
  )
}

export default DiscountSection
