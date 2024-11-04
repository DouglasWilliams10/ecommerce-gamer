'use client'
import { Product } from "@/core";
import { useCallback, useEffect, useState } from "react";

const urlBase = 'http://localhost:4000'

// Function hook para utilizar o backend
export default function useProducts() {
    
// Páginas com o useState só estão disponíveis nas páginas do lado do cliente
    const [products, setProducts] = useState<Product[]>([]) 

    async function getProducts(): Promise<Product[]> {
        const resp = await fetch(`${urlBase}/products`)
        const products = resp.json()
        return products ?? []
    }

    const getProductsId = useCallback(async function getProductsId(
        id: number
    ): Promise<Product | null> {
        const resp = await fetch(`${urlBase}/product/${id}`)
        const product = await resp.json()
        return product ?? null
    },
[])


// useEffect serve para alterar a lista de produtos, de forma segura, através da resposta da função getProducts
    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return {
        products,
        getProductsId,
    }
}

// Função teste para utilizar a lista de produtos do front sem usar o backend

// Essa função vai renderizar a lista de produtos que está salva na parte do frontend para testes.

// export default function useProducts() {
//     return {
//         products
//     }
// }

// Verificar onde estão sendo exportados os products para serem renderizados e chamar
// a função useProducts abaixo para tirar a importação do array de produtos.


//  const { products } = useProducts()
