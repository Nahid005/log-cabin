import Heading from "../ui/Heading";
import ProductCard from "./compaundComponents/ProductCard";


const active = {
  color: "#cc0000"
}

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>

      <ProductCard>
        <ProductCard.Images src="" />
        <ProductCard.Title />
        <ProductCard.Price />
        <ProductCard.Stock />
        <ProductCard.Button />
      </ProductCard>
    </>
  )
}

export default NewUsers;
