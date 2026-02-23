
import React from 'react'

const AdminProductCard = ({ item }) => {
  return (
    <div className="flex items-center bg-[#f3f2f2] shadow-md rounded-2xl m-5 w-[75%] max-md:w-[90%] space-x-4 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={item.image} 
        alt={item.nombre} 
        className="w-24 h-24 object-cover rounded-md shrink-0" 
      />

      {/* Detalles */}
      <div className="flex flex-col justify-between grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.nombre}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-md font-bold text-indigo-600">${item.price}</p>
        <h3 className="text-lg font-semibold text-gray-800">ID: {item.id}</h3>
      </div>
    </div>
  )
}

export default AdminProductCard

