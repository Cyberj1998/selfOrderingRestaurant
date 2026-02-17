import Image from "next/image"

const ProductCart = ({ product }) => {
  return (
    <div className="bg-white h-65 max-md:-60 w-65 max-md:w-55 rounded-2xl shrink-0 m-2 relative flex justify-center items-center mt-20">
      <Image 
        src={`${product.image}`}
        alt="product image"
        height={50}
        width={50}
        className="h-50 max-md:h-40 w-50 max-md:w-40 absolute -top-20 max-md:-top-10"
      />
      <div className="h-full w-full flex justify-center items-end">
        <div className="h-25 w-full flex flex-col">
          <h3 className="text-[#2a2828] text-[20px] font-semibold ml-2">{product.name}</h3>
          <div className="h-fit w-full flex flex-row justify-between items-center">
            <h3 className="text-[#2a2828] text-[20px] max-md:text-[15px] font-semibold ml-2">
              $: {product.price}
            </h3>
            <button className="bg-linear-to-r from-[#0e9753] to-[#59e1a9] mr-1 h-12.5 max-md:h-10 w-40 max-md:w-30 rounded-3xl cursor-pointer flex flex-row justify-center items-center">
              <p className="text-[15px] max-md:text-[12px] font-semibold text-white">
                Anadir al carrito
              </p>
              <Image 
                src='/images/cart.png'
                alt="car"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
