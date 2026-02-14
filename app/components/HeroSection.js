import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Image 
        src='/images/background.jpg'
        layout="fill"
        objectFit="cover"
        alt="background"
      />
      <div className="h-screen w-full bg-[#1414149d] absolute z-10 flex justify-center items-center max-md:justify-end flex-col">
        <h3 className="text-center text-[50px] max-md:text-[35px] font-semibold text-[#20860e]">
          Bienvenido a <br/> nuestro restaurante! 👋
        </h3>
        <p className="text-[17px] w-187.5 max-md:w-full p-5 font-sans text-left text-white">
          Bienvenido a --Nombre de Tu Restaurante--  
          Donde la pasión culinaria se encuentra con experiencias inolvidables. Disfruta de nuestros exquisitos platos
        </p>
        <div className="w-full flex justify-center items-center max-md:justify-end">
          <Link href="/shop" className="h-12.5 max-md:h-15 w-62.5 bg-[#20860e] m-5 max-md:mb-5 max-md:mr-0 rounded-bl-4xl rounded-br-4xl rounded-tl-4xl rounded-tr-4xl max-md:rounded-br-0 max-md:rounded-br-none max-md:rounded-tr-none flex flex-row justify-start items-center">
            <div className="bg-[#34b11e] h-11.25 max-md:h-14 w-11.25 max-md:w-14 rounded-full m-1 flex justify-center items-center">
              <Image 
                src='/images/right.png'
                height={40}
                width={40}
                alt="arrow"
              />
            </div>
            <p className="text-white font-semibold text-[17px]">
              Empezar...!
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
