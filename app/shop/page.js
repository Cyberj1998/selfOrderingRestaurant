import NavBar from "../components/NavBar"
import DiscountSection from "../components/DiscountSection"
import Selector from "../components/Selector"
import ShopSelector from "../components/ShopSelector"

const page = () => {
  return (
    <section className='h-fit max-md:h-screen w-full flex flex-col justify-center items-center bg-[#2a2828]'>
      
      {/*------------------------------navbar----------------------------*/}

      <NavBar />

      {/*------------------------------oferta seccion----------------------------*/}
      
      <DiscountSection />

      {/*------------------------------selector seccion----------------------------*/}

      <Selector />

      {/*------------------------------Shop Selector seccion----------------------------*/}

      <ShopSelector />
    </section>
  )
}

export default page
