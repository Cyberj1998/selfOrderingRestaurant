'use client'
import CartNavBar from "../components/CartNavBar"
import CartCard from "../components/CartCard"
import useCartStore from "../store/CartSlice"

const page = () => {

  const cart = useCartStore(state=>state.cart)

  return (
    <>
      <CartNavBar />
      <div className="h-fit w-full flex flex-col justify-start items-center bg-[#2a2828]">
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
