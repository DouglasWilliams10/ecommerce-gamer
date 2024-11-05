export default class Coin {
    static formatar(valor: number, location: string = 'pt-BR', coin: string = 'BRL'): string {
        return (valor ?? 0).toLocaleString(location, {
            style: 'currency',
            currency: coin,
        })
    }
}