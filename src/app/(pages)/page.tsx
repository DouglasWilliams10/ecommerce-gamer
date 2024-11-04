'use client'
import ProductItem from "@/app/(pages)/products/ProductItem";
import useProducts from "@/data/hooks/useProducts";


export default function Home() {

  // Função para acesso da lista de produtos, acessando através desse hook sem necessidade de importação.
  // Gera estados e faz a interatividade com o backend da aplicação.
  const { products } = useProducts()


  return (
      <div className="grid grid-cols-4 gap-5 container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

      </div>
  );
}
