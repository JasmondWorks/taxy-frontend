import { coloredCardString } from "./colored-card.js";
import { increasedTaxFreeIcon } from "./icons/increased-tax-free.js";
import { noMoreMimimumTaxIcon } from "./icons/no-more-minimum-tax.js";
import { simplifiedRatesIcon } from "./icons/simplified-rates.js";
import { smallBusinessExemptionIcon } from "./icons/small-business-exemption.js";

export const aboutTaxHtmlString = () => `
        <div>
          <div class="flow">
            <h2>What is the new tax rule about?</h2>
            <p>
              Nigeria's 2026 tax reforms are designed to make taxation fairer and
              simpler for everyone. Here's what you need to know:
            </p>
          </div>
          <div
            class="colored-cards-container colored-cards-container--responsive"
          >
            ${coloredCardString({
              title: "Increased Tax-Free Threshold",
              subtitle:
                "The amount you can earn without paying tax has increased from ₦300,000 to ₦800,000 per year. This means more money in your pocket!",
              icon: increasedTaxFreeIcon,
              variant: "green",
            })}
            ${coloredCardString({
              title: "No More Minimum Tax",
              subtitle: `Previously, everyone had to pay a minimum tax regardless of
                  income. This has been abolished, providing relief for lower
                  earners.`,
              icon: noMoreMimimumTaxIcon,
              variant: "orange",
            })}
            ${coloredCardString({
              title: "Small Business Exemption",
              subtitle: `Businesses with annual revenue under ₦50 million and fixed
                  assets under ₦250 million are now exempt from Corporate Income
                  Tax.`,
              icon: smallBusinessExemptionIcon,
              variant: "red",
            })}
            ${coloredCardString({
              title: "Simplified Rates",
              subtitle: `The tax system now uses clearer, progressive rates: 15% for
                  income ₦800K-₦2.8M, 18% for ₦2.8M-₦5.4M, 21% for ₦5.4M-₦10.5M,
                  and 24% above that.`,
              icon: simplifiedRatesIcon,
              variant: "green",
            })}
          </div>
          <div class="buttons-container">
            <button class="btn btn--outline about-tax-back-btn"><i class="ri-arrow-left-long-line"></i> Back</button>
            <button class="btn btn--primary about-tax-next-btn">See how this affects you <i class="ri-arrow-right-long-line"></i></button>
          </div>
        </div>
`;
