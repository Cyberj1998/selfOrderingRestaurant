'use client'
import ProductCard from "./ProductCard"
import { useEffect, useState } from "react";
//import products from "../constants/products"

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

  
  return (
    <div className="border-2 border-[#353434] w-[85%] rounded-2xl flex flex-wrap justify-center max-md:justify-start max-md:flex-nowrap max-md:overflow-x-scroll max-md:h-fit">
      {
        items.map((product)=> category === product.category ? (
          <ProductCard 
            key={product.id}
            product={product}
          />
        ) : '')
      }
    </div>
  )
}

export default ShopSelector
