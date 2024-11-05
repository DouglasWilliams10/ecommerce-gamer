import { Product } from "@/core";

export interface ProductTitleProps {
    product: Product
}

export default function ProductTitle(props: ProductTitleProps) {
    const { product } = props
    return (
        <div className="flex flex-col">
            <div className="text-2xl">{product?.name}</div>
            <div className="font-light text-zinc-400">{product?.description}</div>
        </div>
    )
}