import ProductItem from "@/components/products/ProductItem";
import products from "@/core/constants/products";



export default function Home() {
  return (
    <div>
      <body className="grid grid-cols-4 gap-5 container">
          {products.map((product) => (
            <ProductItem key={product.id} products={product} />
          ))}
      </body>

    </div>
  );
}
