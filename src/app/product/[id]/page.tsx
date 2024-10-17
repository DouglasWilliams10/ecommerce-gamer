import { products } from "@/core"
// Essa pasta recebe o nome de [id], entre colchetes, para demonstrar que é uma página dinâmica.



export default function PageProduct(props: any) {
    //colocando o sinal de + na frente para converter a string em número
    const id = +props.params.id 
    // Pega a lista de produtos e procura qual o produto possui exatamente o id que foi enviado para procura, clicando no produto na tela
    const product = products.find(p => p.id ===id) 
    return product ? (<div>{product?.name}</div>) : (<div>Produto não foi encontrado</div>)
}