'use client'
import Image from "next/image"
import { useState, useEffect } from "react";

const page = () => {

  const [ordenes, setOrdenes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchOrdenes() {
      try {
        const response = await fetch('http://localhost:3001/orders'); 
        if (!response.ok) {
          throw new Error('Error al obtener las órdenes');
        }
        const data = await response.json();
        setOrdenes(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchOrdenes();
  }, []);

  return (
    <div className='h-screen overflow-y-scroll w-full flex flex-col justify-center items-center'>
      {
        ordenes.map((orden)=>(
          <div
            className="border border-white h-fit w-[90%] rounded-2xl flex flex-row justify-between" 
            key={orden.id}
          >
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-[20px] text-white uppercase">
                Total: ${orden.total}
              </h3>

              <h3 className="text-[20px] text-white uppercase">
                mesa: {orden.mesa}
              </h3>
            </div>

            <div className="w-[80%] h-fit flex flex-col justify-start items-center">
              {
                orden.orden.map((ordenInTheCart, index)=>(
                  <div
                    key={index} 
                    className="h-37.5 w-[90%] rounded-2xl m-2 border border-white flex flex-row justify-between items-center"
                  >
                    <div className="flex flex-col justify-center items-center m-2">
                      <Image 
                        src={ordenInTheCart.image}
                        height={20}
                        width={100}
                        alt="product image"
                      />
                      <h3 className="text-white text-[15px]">
                        {ordenInTheCart.nombre}
                      </h3>
                    </div>
                    <h3 className="text-white text-[20px] uppercase">
                      cantidad: {ordenInTheCart.quantity}
                    </h3>
                    <h3 className="text-white text-[20px] uppercase m-2">
                      precio: {ordenInTheCart.price}
                    </h3>
                  </div>
                ))
              }
               <Image
                  src='/images/trash.png'
                  alt="delete"
                  height={20}
                  width={20}
                  className="absolute top-0 right-0"
                />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default page
