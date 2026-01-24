import { formatCurrency } from "../js/helpers.js";
import { coloredCardString } from "./colored-card.js";
import { modalHtmlString } from "./modal.js";

// Icons
import { whatChangedIcon } from "./icons/what-changed.js";
import { questionMarkIcon } from "./icons/question-mark.js";
import { personIcon } from "./icons/person.js";

export const businessTaxResultHtmlString = ({ calculatedTax }) => {
  const {
    status,
    taxesApplicable,
    estimatedTax,
    nextSteps,
    fixedAssets,
    grossAnnualIncome,
  } = calculatedTax;

  const isExempt = status === "EXEMPT";

  let headerTitle = "Your Business Tax Status";
  let headerMessage = "";

  if (isExempt) {
    headerMessage = `
        Good news! Since your turnover is under ${formatCurrency(100000000)} and
        fixed assets under ${formatCurrency(250000000)},
        <strong> you're EXEMPT from Companies Income Tax! </strong>
      `;
  } else if (status === "LARGE COMPANY") {
    headerMessage = `
        Your business is classified as a <strong>Large Company</strong> (Turnover > ₦50bn or Multinational).
        You may be subject to the Minimum Effective Tax (MET) of 15%.
      `;
  } else {
    headerMessage = `
        Your business is <strong>Taxable</strong>. You are required to file and pay Companies Income Tax (CIT).
      `;
  }

  const taxesList =
    taxesApplicable.length > 0
      ? `<ul>${taxesApplicable.map((t) => `<li>${t}</li>`).join("")}</ul>`
      : "None";

  const nextStepsList =
    nextSteps.length > 0
      ? `<ul>${nextSteps.map((s) => `<li>${s}</li>`).join("")}</ul>`
      : "None";

  return /* html */ `
    <div class="business-tax-result">
      <div class="flow">
        <h1>${headerTitle}</h1>
        <p>${headerMessage}</p>
      </div>
      <div class="colored-cards-container">
        ${coloredCardString({
          title: "Taxes Applicable",
          icon: whatChangedIcon, // generic icon
          children: /* html */ `
            <div class="colored-card__list">
               ${taxesList}
            </div>
          `,
          variant: isExempt ? "green" : "orange",
        })}
        
         ${coloredCardString({
           title: "Estimated Tax Liability",
           icon: personIcon,
           children: /* html */ `
             <div class="colored-card__list">
               <p><strong>${typeof estimatedTax === "number" ? formatCurrency(estimatedTax) : estimatedTax}</strong></p>
               ${typeof estimatedTax === "number" ? "<small>Derived from declared profit</small>" : ""}
            </div>
          `,
           variant: "purple",
         })}

        ${coloredCardString({
          title: "Next Steps",
          icon: questionMarkIcon,
          children: /* html */ `
              <div class="colored-card__list">
                 ${nextStepsList}
              </div>
            `,
          variant: "blue",
        })}

      </div>

      <div class="buttons-container">
        <button type="button" class="btn btn--outline previous-button">
          <i class="ri-arrow-left-long-line"></i> Back
        </button>
         <button onclick="goToPage('next-steps-businessowner.html')" type="button" class="btn btn--primary btn--wide">
            Details & Filing <i class="ri-arrow-right-long-line"></i>
        </button>
      </div>
    </div>
  `;
};
