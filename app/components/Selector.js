import categories from "../constants/categories"
import Image from "next/image"


const Selector = ({ setCategory }) => {

  const handlerCategory = (categoryName) => {
    setCategory(categoryName)
  }

  return (
    <div className="h-fit w-[85%] m-5 flex flex-row">
      {categories.map((category)=>(
        <button 
          className="rounded-2xl cursor-pointer m-2 h-25 max-md:h-10 w-25 max-md:w-10 flex flex-col justify-center items-center bg-[#252424]"
          key={category.id}
          onClick={()=>handlerCategory(category.name)}
        >
          <Image 
            src={`${category.image}`}
            height={10}
            width={10}
            alt="categoory icon"
            className="h-15 w-15 max-md:h-10 max-md:w-10"
          />
          <p className="text-white font-semibold text-[15px] max-md:text-[12px]">
            {category.name}
          </p>
        </button>
      ))}
    </div>
  )
}

export default Selector
