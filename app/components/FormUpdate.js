'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import AdminProductCard from './AdminProductCard'

const FormUpdate = ({ items }) => {

  const[id,setId]=useState(0)
  const[price,setPrice]=useState(0)

  useEffect(()=>{
    console.log(items)
  },[])

  
  const handleSaveProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/items/${id}/price`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price }) 
      })

      const data = await response.json()

      if (!response.ok) {
        alert(`Error: ${data.error}`)
        return
      }

      alert(data.message) 
      console.log('Producto actualizado:', data.product)

    } catch (error) {
      console.error('Error al actualizar el precio:', error)
    }
  }


  return (
    <div className='bg-white p-2 rounded-2xl shadow-lg w-[90%] max-md:w-full flex flex-row max-md:flex-col justify-center items-centers'>
      
      {/*----------------------------------all the products field*/}
      <div className='w-[50%] max-md:w-full h-100 flex flex-col justify-start items-center overflow-y-scroll'>
        {items.map((item)=>(
          <AdminProductCard 
            key={item.id}
            item={item}
          />
        ))}
      </div>
      {/*--------------------------------update field*/}
      <div className='w-[50%] max-md:w-full flex flex-col justifystart items-center'>
        <label htmlFor="id" className="mb-1 text-sm font-medium text-gray-700" >id del producto</label>
        <input 
          id="id" 
          name="id"
          type="number"
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder="id del producto..."
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />

        <label htmlFor="precio" className="mb-1 text-sm font-medium text-gray-700" >nuevo precio</label>
        <input 
          id="precio" 
          name="precio"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder="nuevo precio..."
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
        />

        <button 
          onClick={()=>handleSaveProduct()}
          className="mt-4 bg-indigo-600 p-2 text-white py-2 cursor-pointer rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Guardar nuevo precio
        </button>
      </div>
    </div>
  )
}

export default FormUpdate
