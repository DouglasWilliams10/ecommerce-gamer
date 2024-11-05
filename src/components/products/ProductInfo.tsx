import { Product } from "@/core";
import Image from 'next/image'
import Specifications from "./Specifications";

export interface ProductInfoProps {
    product: Product
}

export default function ProductInfo(props: ProductInfoProps) {
    const { product } = props
    return (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image
                    src={product.image!}
                    fill
                    className="object-cover p-7"
                    alt="Imagem do Produto"
                />
            </div>
            <Specifications product={product} />
        </div>
    )
}