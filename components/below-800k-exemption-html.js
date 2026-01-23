import { coloredCardString } from "./colored-card.js";
import { taxObligationIcon } from "./icons/tax-obligation.js";

export const taxExemptionHtmlString = ({
  jobOccupation,
  calculatedTax,
  formatCurrency,
}) => {
  return /* html */ `
            <div class="tax-exemption-below-800k-result">
              <div class="flow">
                <h1>Does the 2026 tax apply to you?</h1>
                <p>
                  <strong>No</strong>. As a ${jobOccupation} with ${formatCurrency(
                    calculatedTax.grossAnnualIncome,
                  )}/yearly revenue, you pay ZERO tax
                </p>
              </div>
              <div class="colored-cards-container">
              ${coloredCardString({
                title: "Your tax obligation",
                subtitle: "",
                icon: taxObligationIcon,
                children: /* html */ `
                <ul class="colored-card__list colored-card__list--responsive">
                      <li>
                        <strong>Old system:</strong><br />
                        Tax-free threshold: ${formatCurrency(300000)}/year
                      </li>
                      <li>
                        <strong>New system:</strong><br />
                        ${formatCurrency(800000)}/year (167% increase)
                      </li>
                      <li>
                        <strong>Minimum tax applied to everyone:</strong><br />
                        —
                      </li>
                      <li>
                        <strong>Minimum tax abolished:</strong><br />
                        —
                      </li>
                    </ul>
                `,
                variant: "green",
              })}
              </div>
              <div class="buttons-container">
                <button type="button" class="btn btn--outline previous-button">
                  <i class="ri-arrow-left-long-line"></i> Previous
                </button>
                <button onclick="goToPage('next-steps-Lessthan800k.html')" type="button" class="btn btn--primary btn--wide">
                  Next steps <i class="ri-arrow-right-long-line"></i>
                </button>
              </div>
            </div>`;
};
