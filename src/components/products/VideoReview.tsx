import { Product } from "@/core";
import ReactPlayer from "react-player";

export interface VideoReviewProps {
    product: Product
}

export default function VideoReview(props: VideoReviewProps) {
    const { product } = props
    return (
        <div className="flex justify-center mt-5 rounded-xl container">
            <ReactPlayer url={product?.videoReview} alt="Video explicando sobre o produto" />
        </div>
    )
}