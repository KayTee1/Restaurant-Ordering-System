const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
  minimumFractionDigits: 2,
});

export function formatCurrency(value: number | string): string {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  return CURRENCY_FORMATTER.format(numberValue);
}
