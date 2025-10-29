export interface BudgetItem {
  code: string;
  name: string;
  qty: number;
  price: number;
}

export interface BudgetMeta {
  companyName: string;           // "TESTA HERMANOS"
  tagline?: string;              // "Desde 1977 forjando calidad"
  logoUrl?: string;              // "/testa-hermanos-logo.png"
  budgetTitle?: string;          // "Presupuesto"
  customerName?: string;         // opcional
  customerPhone?: string;        // opcional
  currency?: string;             // "ARS" por defecto
  notes?: string;                // observaciones del presupuesto
  createdAt?: Date;              // fecha del presupuesto
  includeTaxes?: boolean;        // si querés mostrar IVA
  taxRate?: number;              // 0.21 por ejemplo
  discountRate?: number;         // 0–1, ej 0.10 para 10%
}
