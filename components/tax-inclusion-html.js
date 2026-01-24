import { formatCurrency } from "../js/helpers.js";
import { coloredCardString } from "./colored-card.js";
import { whatChangedIcon } from "./icons/what-changed.js";
import { yourTaxObligationIcon } from "./icons/your-tax-obligation.js";
import { modalHtmlString } from "./modal.js";
import { payeTableRateBreakdownHtmlString } from "./paye-table-rate-breakdown-html.js";

export const taxInclusionHtmlString = ({ jobOccupation, calculatedTax }) => {
  return /* html */ `
    <div class="tax-inclusion-result">
      <div class="flow">
        <h1>Does the 2026 tax apply to you?</h1>
        <p>
          <strong>Yes</strong>. As a/an ${jobOccupation} earning
          ${formatCurrency(calculatedTax.grossAnnualIncome)}/year, you are
          required to pay income tax under the new 2026 reforms.
        </p>
      </div>
      <div class="colored-cards-container">
        ${coloredCardString({
          title: "What changed?",
          subtitle: "",
          icon: whatChangedIcon,
          children: /* html */ `
            <ul class="colored-card__list">
              <li>
                The tax-free threshold increased from ${formatCurrency(300000)}
                to ${formatCurrency(800000)}
              </li>
              <li>
                You now pay 15% only on income above ${formatCurrency(800000)}
              </li>
              <li>Old system: You paid tax on everything.</li>
              <li>New system: First ${formatCurrency(800000)} is tax-free</li>
            </ul>
          `,
          variant: "purple",
        })}
        ${coloredCardString({
          title: "Your tax obligation",
          subtitle: "",
          icon: yourTaxObligationIcon,
          children: /* html */ `
            <ul class="colored-card__list colored-card__list--responsive">
              <li>
                <strong>Annual tax:</strong><br />
                ${formatCurrency(calculatedTax.calculatedTaxAmount)}
              </li>
              <li>
                <strong>Monthly tax:</strong><br />
                ${formatCurrency(calculatedTax.calculatedTaxAmount / 12)}
              </li>
              <li>
                <strong>Effective rate:</strong><br />
                ${Math.round(
                  (calculatedTax.calculatedTaxAmount /
                    calculatedTax.grossAnnualIncome) *
                    100,
                )}% of your total income
              </li>
            </ul>
          `,
          variant: "green",
        })}
      </div>
      <div style="margin-top: var(--space-500); margin-inline: auto;">
        <button class="btn btn--outline modal-trigger" data-target="#tax-inclusion-modal">View breakdown</button>
        ${modalHtmlString({
          id: "tax-inclusion-modal",
          // title: "Tax Inclusion",
          body: payeTableRateBreakdownHtmlString(calculatedTax),
          footer: "",
        })}
      </div>
      <div class="buttons-container">
        <button type="button" class="btn btn--outline previous-button">
          <i class="ri-arrow-left-long-line"></i> Back
        </button>
        <button
          onclick="goToPage('next-steps-Above800k.html')"
          type="button"
          class="btn btn--primary btn--wide submit-button"
        >
          Next steps <i class="ri-arrow-right-long-line"></i>
        </button>
      </div>
    </div>`;
};
