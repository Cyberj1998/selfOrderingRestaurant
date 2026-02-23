'use client'
import { useState } from "react";

const FormInsert = () => {

  const[nombre,setNombre]=useState('')
  const[price,setPrecio]=useState(0)
  const[category, setCategoria]=useState('completa');
  const[image,setImagen]=useState('')

  const handleCleamForm = () => {
    setNombre('')
    setPrecio()
    setCategoria('')
    setImagen('')
  }

  const handleSaveProduct = async (e) => {
    e.preventDefault()
    const nuevoProducto = { nombre, price, category, image }

    try {
      const response = await fetch('http://localhost:3001/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
      })

      const productoCreado = await response.json()
      console.log('Producto creado:', productoCreado)
      handleCleamForm()
      alert('Producto anadido exitosamente')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <form className="bg-white p-8 rounded-2xl shadow-lg max-w-xl w-full flex flex-col gap-4">
        <h3 className="text-[#2a2828] text-2xl font-semibold">Inserte nuevos productos</h3>
        
        <div className="flex flex-col">
          <label htmlFor="nombre" className="mb-1 text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input 
            id="nombre" 
            name="nombre"
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre del producto..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="precio" className="mb-1 text-sm font-medium text-gray-700">
            Precio
          </label>
          <input 
            id="precio" 
            name="precio"
            type="number"
            value={price}
            onChange={e => setPrecio(e.target.value)}
            placeholder="Precio del producto..."
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="categoria" className="mb-1 text-sm font-medium text-gray-700">
            Categoría
          </label>
          <select 
            id="categoria" 
            name="categoria"
            value={category}
            onChange={e => setCategoria(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="completa">Completa</option>
            <option value="pizza">Pizza</option>
            <option value="bebida">Bebida</option>
            <option value="postres">Postres</option>
            <option value="hamburguesas">Hamburguesas</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="imagen" className="mb-1 text-sm font-medium text-gray-700">
            Imagen
          </label>
          <input 
            id="imagen" 
            name="imagen"
            value={image}
            onChange={e => setImagen(e.target.value)}
            type="text"
            placeholder="URL imagen"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button 
          onClick={(e)=>handleSaveProduct(e)}
          className="mt-4 bg-indigo-600 cursor-pointer text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Guardar Producto
        </button>
      </form>
  )
}

export default FormInsert
