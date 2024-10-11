import { Products } from "@/core"

export interface ProductItemProps {
    products: Products
}

export default function ProductItem(props: ProductItemProps) {
    return <div>
        {props.products.name}
    </div>
}