'use client'

import useProducts from "@/data/hooks/useProducts";
import ProductItem from "./products/ProductItem";
import { Product } from "@/core";

export default function Home() {

  // Função para acesso da lista de produtos, acessando através desse hook sem necessidade de importação.
  // Gera estados e faz a interatividade com o backend da aplicação.
  const { products } = useProducts()


  return (
    <div>
      <div className="grid grid-cols-4 gap-5 container">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}
