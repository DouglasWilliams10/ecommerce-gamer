import { Product } from "@/core";
import { IconChevronDown, IconMoodConfuzed, IconMoodHappy, IconMoodSad, IconPercentage0 } from "@tabler/icons-react";

export interface PriceMeterProps {
    product: Product
}

export default function PriceMeter(props: PriceMeterProps) {
    const {
        lowestPrice: lowest,
        highestPrice: maximum,
        promotionalPrice: current,
        averagePrice: average,
    } = props.product

    // TODO: Mover calculo para o /core dentro de um hook personalizado
    let percent
    if (current > average) {
        percent = ((current - average) / (maximum - average)) * 50 + 50
    } else {
        percent = (1 - (average - current) / (average - lowest)) * 50
    }

    return (
        <div className="flex flex-col border border-white/10 p-7 rounded-xl gap-4 bg-violet-dark">
            <div className="flex items-center gap-2">
                {percent >= 40 && percent < 60 ? (
                    <IconMoodConfuzed
                        size={40}
                        stroke={1.5}
                        className="text-yellow-500" />
                ) : percent >= 60 ? (
                    <IconMoodSad
                        size={40}
                        stroke={1.5}
                        className="text-red-500"
                    />
                ) : (
                    <IconMoodHappy
                        size={40}
                        stroke={1.5}
                        className="text-green-500"
                    />
                )}
                <div className="flex flex-col">
                    <div className="flex gap-1.5">
                        <span>O preço do produto está </span>
                        <div className="font-bold">
                            {percent >= 40 && percent < 60 ? (
                                <span className="text-yellow-500"> na média</span>
                            ) : percent >= 60 ? (
                                <span className="text-red-500">acima da média</span>
                            ) : (
                                <span className="text-green-500">abaixo da média</span>
                            )}
                        </div>
                    </div>
                    <div className="text-zinc-400 text-sm">
                        Com base no preço dos últimos <span className="text-white"> 30 dias</span>
                    </div>

                    <div className="
                        flex items-center mt-3 h-2 bg-gradient-to-r
                        from-green-500 via-yellow-400 to-red-500
                        rounded-full relative border-2 border-black
                        "
                    >
                        <div
                            className="absolute flex justify-center items-center h-4 w-4 bg-white rounded-full"
                            style={{
                                left: `${percent}%`,
                            }}
                        >
                            <IconChevronDown size={20} className=" absolute text-white -mt-8" />
                            <div className="h-2.5 w-2.5 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}