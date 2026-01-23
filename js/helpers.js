export function getYear() {
  return new Date().getFullYear();
}

export function formatCurrency(amount) {
  // use the naira string instead of the currency symbol
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

export function goToPage(url) {
  window.location.href = url;
}
