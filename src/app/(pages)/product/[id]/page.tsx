'use client'

import PriceMeter from "@/components/products/PriceMeter"
import ProductInfo from "@/components/products/ProductInfo"
import ProductTitle from "@/components/products/ProductTitle"
import PurchaseBanner from "@/components/products/PurchaseBanner"
import UserAssessment from "@/components/products/UserAssessment"
import VideoReview from "@/components/products/VideoReview"
import Product from "@/core/product/Product"
import useProducts from "@/data/hooks/useProducts"
import React from "react"
import { useEffect, useState } from "react"

// A pasta desse arquivo recebe o nome de [id], entre colchetes, para demonstrar que é uma página dinâmica.


export default function PageProduct(props: any) {
    const { getProductId } = useProducts()
    const [ product, setProduct ]  = useState<Product | null>(null)

    //colocando o sinal de + na frente para converter a string em número
    useEffect(() => {
        getProductId(+props.params.id).then(setProduct)
    }, [props.params.id,  getProductId])

    

    return product ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product}/>
                <ProductInfo product={product}/>
                <PurchaseBanner product={product}/>
                <PriceMeter product={product}/>
                <UserAssessment product={product} />
                <VideoReview product={product} />
            </div>
        </div>
    ) : <div>Produto não encontrado</div>
}