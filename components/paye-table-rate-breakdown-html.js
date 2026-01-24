import { formatCurrency } from "../js/helpers.js";

export const payeTableRateBreakdownHtmlString = (calculatedTax) => {
  const tableRows = calculatedTax.totalTax
    .map((item) => {
      const ratePercent =
        item.rate !== undefined ? (item.rate * 100).toFixed(0) : "";
      const bracketText =
        item.bracket + (ratePercent !== "" ? ` @ ${ratePercent}%` : "");

      return `
        <tr>
          <td>${bracketText}</td>
          <td>${formatCurrency(item.taxableIncome)}</td>
          <td>${formatCurrency(item.taxDue)}</td>
        </tr>`;
    })
    .join("");

  // Calculate generic totals for footer
  // Note: Total Taxable Income in the table is essentially the Chargeable Income
  const totalTaxableIncome = calculatedTax.chargeableIncome;
  const totalTaxDue = calculatedTax.calculatedTaxAmount;

  const monthlyGross = calculatedTax.grossAnnualIncome / 12;
  const monthlyTax = calculatedTax.calculatedTaxAmount / 12;
  const effectiveTaxRate =
    calculatedTax.grossAnnualIncome > 0
      ? (
          (calculatedTax.calculatedTaxAmount /
            calculatedTax.grossAnnualIncome) *
          100
        ).toFixed(2)
      : "0";

  return `
    <div class="paye-tax-breakdown-container">
      <h3 class="text-center title">PAYE tax bracket breakdown</h3>
      <div class="tabs">
        <!--<div class="tabs__buttons">
          <button class="tab-button tab-button--active">Old Law</button>
          <button class="tab-button">New Law</button>
        </div>-->
        <div class="tabs__content-container">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Tax bracket</th>
                  <th>Taxable Income (₦)</th>
                  <th>Tax Due (₦)</th>
                </tr>
              </thead>
              <tbody>
                ${tableRows}
              </tbody>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <th>${formatCurrency(totalTaxableIncome)}</th>
                  <th>${formatCurrency(totalTaxDue)}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Your tax summary</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Monthly summary</td>
                        <td>${formatCurrency(monthlyGross)}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Monthly PAYE tax</td>
                        <td>${formatCurrency(monthlyTax)}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Effective tax rate</td>
                        <td>${effectiveTaxRate}%</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>`;
};
