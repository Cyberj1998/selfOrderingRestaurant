import ProductCart from "./ProductCart"
import products from "../constants/products"

const ShopSelector = () => {
  return (
<div className="border-2 border-[#353434] w-[85%] rounded-2xl flex flex-wrap justify-center max-md:justify-start max-md:flex-nowrap max-md:overflow-x-scroll max-md:h-fit">
      {
        products.map((product)=>(
          <ProductCart 
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default ShopSelector
