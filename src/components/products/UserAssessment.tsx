import { Product } from "@/core";
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import VideoReview from "./VideoReview";

export interface UserAssessmentProps {
    product: Product
}

export default function UserAssessment(props: UserAssessmentProps) {
    return (
        <div>
            <div className="flex flex-col">
                <span className="font-bold">Review do Produto</span>
                <span className="text-sm">Análise imparcial e aprofundada sobre o produto, apresentada
                    por canais, especializados em técnologias, no YouTube.
                </span>
            </div>
        </div>
    )
}