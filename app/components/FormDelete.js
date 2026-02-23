import React from 'react'
import AdminCardProductDelete from './AdminCardProductDelete'

const FormDelete = ({ items }) => {
  return (
    <div className='bg-white p-2 rounded-2xl shadow-lg w-[90%] max-md:w-full h-[85%] max-md:h-[90%] flex flex-row max-md:flex-col justify-center items-centers'>
      
      {/*----------------------------------all the products field*/}
      <div className='w-full max-md:w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
        {items.map((item)=>(
          <AdminCardProductDelete 
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default FormDelete
