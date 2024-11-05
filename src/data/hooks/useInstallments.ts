import { QTY_MAX_PARCELS } from "@/core";
import CalculateInstallments from "@/core/installments/CalculateInstallments";

export default function useInstallments(totalValue: number, qtyParcels: number = QTY_MAX_PARCELS) {
    return new CalculateInstallments().executar(totalValue, qtyParcels)
}