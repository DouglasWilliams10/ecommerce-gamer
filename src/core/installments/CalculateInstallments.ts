import { MONTHLY_INTEREST_RATE, QTY_MAX_PARCELS } from "../constants";
import Installment from "./Installments";

export default class CalculateInstallments {
    executar(
        totalValue: number,
        qtyParcels: number = QTY_MAX_PARCELS,
        interestRate: number = MONTHLY_INTEREST_RATE
    ): Installment {
        if (qtyParcels < 2 || qtyParcels > QTY_MAX_PARCELS) {
            throw new Error(`Quantidade de parcelas deve ser entre 2 e ${QTY_MAX_PARCELS}`)
        }

        const totalInterest = this.calculateCompoundInterest(totalValue, interestRate, qtyParcels)

        return {
            parcelsValue: this.toTwoDecimalPlaces(totalInterest / qtyParcels),
            totalValue: this.toTwoDecimalPlaces(totalInterest),
            qtyParcels,
            interestRate,


        }

    }

    private calculateCompoundInterest(totalValue: number, monthlyRate: number, qtyParcels: number): number {
        return totalValue * Math.pow(1 + monthlyRate, qtyParcels)
    }


    private toTwoDecimalPlaces(valor: number): number {
        return Math.round(valor * 100) / 100
    }
}