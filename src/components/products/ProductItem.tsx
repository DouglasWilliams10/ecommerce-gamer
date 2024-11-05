'use client' //Usado para informar que é uma página de uso do cliente, para monitorar o click do mouse no browse
import { Product } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

export interface ProductItemProps {
    product: Product
}

export default function ProductItem(props: ProductItemProps) {
    const { product } = props
    // Ajustando o css dentro da própria className;
    // Cores da className estão no arquivo tailwind.config.ts;
    // border-white/10, o 10 seria a porcentagem da força da cor que vai ser destacada;
    // rounded-xl - Deixa as bordas arredondadas;
    // relative - Para que tudo que for colocado dentro da div, fique restrita ao componente;
    return (
        <Link href={`/product/${product.id}`}
            className="flex flex-col bg-violet-dark border
             border-white/30 rounded-xl relative max-w-[350px]
             "
        >
            <div className="h-48 w-full relative">
                <Image
                    src={product.image}
                    alt="Imagem do produto"
                    // Object-contain faz com que a imagem não fique esticada
                    className="object-contain"
                    fill // Para ocupar o espaço inteiro do componente
                />
            </div>
            {/* Parte específica para mostrar os dados do produto */}

            <div className="flex-1 flex flex-col p-5 gap-3 border-top border-white/30">
                <span className="text-lg font-semibold">{props.product.name}</span>
                <span className="text-sm border-b border-dashed self-start">
                    {product.specifications.emphasis}
                </span>
                {/* div adicionada para fazer os preços descerem e ficarem alinhados no final do card dos produtos. */}
                <div className="flex-1"></div> 
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">de {product.basePrice}</span>
                    <span className="text-xl font-semibold text-emerald-400">
                        por {product.promotionalPrice}
                    </span>
                </div>
                <button className="
                    flex justify-center items-center h-8 gap-2
                    bg-violet-700 hover:border-2 border-emerald-500 rounded-full   
                "
                onClick={(e: any) => {
                    e.preventDefault()
                    console.log('Adicionar ao carrinho')
                } }
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
            </div>

            {/* Css:  
                flex-1, para o elemento crescer o maximo que ele poder dentro da div
                text-lg, faz com que a fonte fique de um tamanho maior que as outras
                p-5, é o padding
                gap-3, da um espaçamento
                font-simibold, para ficar um pouco mais perto do negrito
                text-sm, text small, um texto menor
                border-b, borda em baixo
                border-dashed, borda tracejada
                self-start para que a borda inicie no inicio e não vá até o final, somente até o final da especificação
                line-through, faz o preço ficar com um traço
                
            */}
        </Link>
    )
}