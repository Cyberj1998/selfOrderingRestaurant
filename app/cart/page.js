import CartNavBar from "../components/CartNavBar"
import CartCard from "../components/CartCard"

const page = () => {
  return (
    <>
      <CartNavBar />
      <div className="h-fit w-full flex flex-col justify-start items-center bg-[#2a2828]">
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
      </div>
    </>
  )
}

export default page
