import Price from "./Price"
import Specifications from "./Specifications"

export default interface Products extends Price {
    id: number
    name: string
    description: string
    mark: string
    model: string
    image: string
    videoReview: string
    note: number
    tags: string[]
    specifications: Specifications
}