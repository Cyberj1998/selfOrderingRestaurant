import Image from "next/image"

const AdminCardProductDelete = ({ item }) => {

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/items/${id}/delete`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Error al eliminar el producto')
      }

      const data = await response.json()
      console.log(data.message)
      alert('producto eliminado correctamente')
    } catch (error) {
      console.error(error.message)
    }
  }


   return (
    <div className="flex items-center bg-[#f3f2f2] shadow-md rounded-2xl m-5 w-[75%] max-md:w-[90%] space-x-4 hover:shadow-lg transition-shadow duration-300">
      <img 
        src={item.image} 
        alt={item.nombre} 
        className="w-24 h-24 object-cover rounded-md shrink-0" 
      />

      <div className="flex flex-col justify-between grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.nombre}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-md font-bold text-indigo-600">${item.price}</p>
        <h3 className="text-lg font-semibold text-gray-800">ID: {item.id}</h3>
      </div>
      <button 
        onClick={()=>handleDeleteProduct(item.id)}
        className="border border-red-500 rounded-2xl flex flex-row max-md:flex-col justify-center items-center cursor-pointer p-2 m-2"
      >
        <Image 
          src='/images/trash.svg'
          height={30}
          width={30}
          alt="delete"
          className="m-2 cursor-pointer"
        />
        <p className="text-[15px] max-md:text-[10px]">Eliminar producto</p>
      </button>
    </div>
  )
}

export default AdminCardProductDelete
