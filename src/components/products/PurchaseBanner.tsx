import { Product, Coin } from "@/core";
import useInstallments from "@/data/hooks/useInstallments";
import { IconCreditCard, IconShoppingCartPlus } from "@tabler/icons-react";
import PriceMeter from "./PriceMeter";

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const { product } = props
    // const { addItem} = useCart()
    const installments = useInstallments(product.promotionalPrice)

    return (
        <div className="flex container my-20">
            <div className="flex flex-col border-r border-zinc-400 pr-5">
                <div className="line-through text-zinc-400 py-3"> de R$ {product?.basePrice}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-xinc-300">por</span>
                    <span className="text-emerald-500"> R$ {product?.promotionalPrice}</span>
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold pl-5">
                <span className="text-base text-zinc-300 py-3">{installments.qtyParcels}x de</span>
                {Coin.formatar(installments.parcelsValue)}{' '}
            </div>
            <div className="flex gap-2 items-center ">
                <button className="flex button bg-pink-600" onClick={() => {}}>
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
                <button className="flex button bg-violet-700" onClick={() => {}}>
                    <IconCreditCard size={20} className="" />
                    <span>Comprar</span>
                </button>
            </div>
            <div>
            </div>
        </div>
    )
}