'use client'
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";
import products from "../constants/products"
import { motion } from "framer-motion"

const ShopSelector = ({ category }) => {

  const[items,setItems]=useState([])

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error('Error al llamar al endpoint:', error));
  }, []);

  //-------------------------framer motion code

  const [activeIndex, setActiveIndex] = useState(-1);

  const dotVariants = {
    initial: { y: 0 },
    animate: { 
      y: -10,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(Math.floor(Math.random() * 100));
    }, 300); // Decreased interval time to 300 milliseconds

    return () => clearInterval(interval);
  }, []);

  
  return (
    <div className="relative border-2 border-[#353434] w-[85%] rounded-2xl flex flex-wrap justify-center max-md:justify-start max-md:flex-nowrap max-md:overflow-x-scroll max-md:h-fit">
      {
        items.map((product)=> category === product.category ? (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ) : '')
      }


      <div className='absolute w-full h-full grid grid-cols-10 max-md:opacity-0 gap-0' style={{ zIndex: 1 }}>
        {[...Array(100).keys()].map((index) => (
          <motion.div
            key={index}
            animate={index === activeIndex ? 'animate' : 'initial'}
            variants={dotVariants}
            className='bg-[#5d5d5d] w-[2.5px] h-[2.5px] rounded-full'
          />
        ))}
      </div>
    </div>
  )
}

export default ShopSelector
