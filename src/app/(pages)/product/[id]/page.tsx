'use client'

import Product from "@/core/product/Product"
import useProducts from "@/data/hooks/useProducts"
import { useEffect, useState } from "react"

// A pasta desse arquivo recebe o nome de [id], entre colchetes, para demonstrar que é uma página dinâmica.


export default function PageProduct(props: any) {
    const { getProductId } = useProducts()
    const [ product, setProduct ]  = useState<Product | null>(null)

    //colocando o sinal de + na frente para converter a string em número
    useEffect(() => {
        getProductId(+props.params.id).then(setProduct)
    }, [props.params.id,  getProductId])

    return product ? <div>{product?.name}</div> : <div>Produto não encontrado</div>
}