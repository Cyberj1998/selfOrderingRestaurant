'use client'
import CartNavBar from "../components/CartNavBar"
import CartCard from "../components/CartCard"
import useCartStore from "../store/CartSlice"
import { useState, useEffect } from "react"
import Image from "next/image"

const page = () => {

  const cart = useCartStore(state=>state.cart)
  const getTotalPrice = useCartStore(state=>state.getTotalPrice)
  const clearCart = useCartStore(state => state.clearCart);

  const[totalPrice,setTotalPrice]=useState(0)
  const[modal,setModal]=useState(false)
  const [selectedNumber, setSelectedNumber] = useState(1)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

  const handleChange = (event) => {
    setSelectedNumber(Number(event.target.value));
  };

  const handleModal = () => {
    setModal(prev=>!prev)
  }

  const handleCleanCart = () => {
    clearCart()
    setModal(prev=>!prev)
  }

  const handleSendOrder = async () => {

    const nuevoPedido = {
      total: totalPrice,
      mesa: selectedNumber,
      orden: JSON.stringify(cart)
    };

    try {
      const res = await fetch('http://localhost:3001/insertorder', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoPedido)
      });

      if (!res.ok) throw new Error('Error al enviar orden');

      const data = await res.json();
      handleCleanCart()
      alert('Orden creada con id: ' + data.id);
    } catch (error) {
      console.error(error);
      alert('Error: ' + error.message);
    }
  }

  useEffect(()=>{
    setTotalPrice(getTotalPrice)
    console.log(cart)
  },[modal])


  return (
    <>
      <CartNavBar setModal={setModal} />
      <div className="h-fit w-full flex flex-col justify-start items-center bg-[#2a2828]">
        
        {/*-----------------------------------modal----------------------------------*/}
        {
          modal ? (
            <div className="modal border border-white h-125 w-[60%] max-md:w-[90%] absolute z-50 rounded-2xl bg-[#393737] flex flex-col justify-evenly items-center">
              <button 
                onClick={()=>handleModal()}
                className="uppercase text-[20px] font-bold text-white bg-red-500 rounded-full h-10 w-10 flex justify-center items-center absolute right-0 top-0 m-5 cursor-pointer select-none"
              >
                X
              </button>
              <h3 className="text-white text-[25px] font-semibold uppercase">
                total a pagar $:{totalPrice}
              </h3>
              <div className="flex flex-row">
                <label htmlFor="number-select" className="text-[20px] text-[#bfbfbf] font-semibold">seleccione su mesa!:</label>
                <select 
                  id="number-select" 
                  value={selectedNumber} 
                  onChange={handleChange}
                  className="text-black bg-white rounded-2xl cursor-pointer h-8 w-15 ml-2"
                >
                  {numbers.map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-[#bfbfbf] text-[20px] font-semibold">Mesa seleccionada: {selectedNumber}</p>
              <button 
                onClick={()=>handleSendOrder()}
                className="bg-linear-to-r from-[#0e9753] to-[#59e1a9] mr-1 h-12.5 max-md:h-10 w-40 max-md:w-30 rounded-3xl cursor-pointer flex flex-row justify-center items-center"
              >
                <p className="text-[20px] text-white font-semibold m-2">ordenar</p>
                <Image 
                  src='/images/cart.png'
                  alt=""
                  height={20}
                  width={20}
                />
              </button>
            </div>
          ) : ''
        }
        {/*-----------------------------------------------------------------------*/}

        
        {cart.map((product)=>(
          <CartCard 
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  )
}

export default page
