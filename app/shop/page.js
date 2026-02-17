'use client'
import NavBar from "../components/NavBar"
import DiscountSection from "../components/DiscountSection"
import Selector from "../components/Selector"
import ShopSelector from "../components/ShopSelector"
import { useState } from "react"

const page = () => {

  const[category,setCategory]=useState('completa')

  return (
    <section className='h-fit max-md:h-screen w-full flex flex-col justify-center items-center bg-[#2a2828]'>
      
      {/*------------------------------navbar----------------------------*/}

      <NavBar />

      {/*------------------------------oferta seccion----------------------------*/}
      
      <DiscountSection />

      {/*------------------------------selector seccion----------------------------*/}

      <Selector setCategory={setCategory} />

      {/*------------------------------Shop Selector seccion----------------------------*/}

      <ShopSelector category={category} />
    </section>
  )
}

export default page
