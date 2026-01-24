import { formatCurrency } from "../js/helpers.js";
import { coloredCardString } from "./colored-card.js";
import { personIcon } from "./icons/person.js";
import { questionMarkIcon } from "./icons/question-mark.js";
import { whatChangedIcon } from "./icons/what-changed.js";

export const exemptionBusinessOwnerHtmlString = ({
  jobOccupation,
  calculatedTax,
}) => /*html*/ `
      <div class="tax-exemption-business-owner-result">
          <div class="flow">
            <h1>Does the 2026 tax apply to you?</h1>
            <p>
              Good news! Since your business has annual revenue under ${formatCurrency(50000000)} and
              fixed assets under ${formatCurrency(25000000)},
              <strong> you're EXEMPT from Corporate Income Tax! </strong>
            </p>
          </div>
          <div class="colored-cards-container">
          ${coloredCardString({
            title: "What changed?",
            icon: whatChangedIcon,
            children: /*html*/ `
              <ul class="colored-card__list">
                <li>Old system: You paid 30% corporate tax</li>
                <li>New system: Small businesses pay ${formatCurrency(0)} corporate tax</li>
                <li>This saves you hundreds of thousands annually</li>
              </ul>
            `,
            variant: "orange",
          })}
          ${coloredCardString({
            title: "But you still need to:",
            icon: questionMarkIcon,
            children: /*html*/ `
              <ul class="colored-card__list">
                <li>
                  Register your business with CAC (Corporate Affairs
                  Commission)
                </li>
                <li>Get a TIN (Tax Identification Number)</li>
                <li>File quarterly returns (even if paying ${formatCurrency(0)})</li>
                <li>Keep proper records</li>
              </ul>
            `,
            variant: "purple",
          })}
          ${coloredCardString({
            title: "Why this matters?",
            icon: personIcon,
            children: /*html*/ `
              <ul class="colored-card__list">
                <li>Tax compliance opens doors to loans and contracts</li>
                <li>You avoid penalties for non-registration</li>
                <li>You're protected if tax authorities audit you</li>
              </ul>
            `,
            variant: "green",
          })}
          </div>
          <div class="buttons-container">
            <button type="button" class="btn btn--outline previous-button">
              <i class="ri-arrow-left-long-line"></i> Back
            </button>
            <button onclick="goToPage('next-steps-businessowner.html')" type="button" class="btn btn--primary btn--wide">
              Next steps <i class="ri-arrow-right-long-line"></i>
            </button>
          </div>
        </div>
`;
