export const formatCentsToDollars = (amount: number) => {
  const amountString = amount.toString().replace(/[^\d.-]/g, "");
  const amountInDollars = parseFloat(amountString);
  return amountInDollars ? amountInDollars / 100 : 0;
};
