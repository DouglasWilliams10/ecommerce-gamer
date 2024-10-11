import ProductItem from "@/components/products/ProductItem";
import { products } from "@/core/constants/products";



export default function Home() {
  return (
    <div>
      <ProductItem products={products[0]}/>
      <ProductItem products={products[1]}/>
      <ProductItem products={products[2]}/>
      <ProductItem products={products[3]}/>
    </div>
  );
}
