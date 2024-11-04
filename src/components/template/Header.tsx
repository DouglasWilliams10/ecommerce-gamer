
"use client"
import Link from "next/link";
import IconCart from "../shared/IconCart";
import Logo from "../shared/Logo";
// import { useCart } from "@/data/hooks/useCart";

export default function Header() {
    // const { qtItems } = useCart()
    return (
        <div
            className="flex flex-col h-20"
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />
                    <Link href="/checkout/carrinho">
                        <IconCart qtItems={0} />
                    </Link>
                </div>
            </div>

            {/* linha abaixo para mostrar uma linha em gradiente */}
            <div className="
            h-px bg-gradient-to-r 
            from-violet-600/20 
            via-violet-600/80
            to-violet-600/20"></div>
        </div>
    )
}