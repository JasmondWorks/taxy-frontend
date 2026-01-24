import { coloredCardString } from "./colored-card.js";
import { dropdownHtmlString } from "./dropdown.js";

export const formsHtmlString = ({
  grossAnnualIncome,
  nhfContribution,
  nhisContribution,
  pensionContribution,
  interestOnLoan,
  lifeInsurancePremium,
  annualRent,
} = {}) => {
  // Helper to safely format value for input (e.g. avoid 'undefined', maybe show '' or value)
  const safeVal = (val) => {
    if (val === undefined || val === null || val === 0) return "";
    return Number(val).toLocaleString("en-US");
  };

  return `
      <div class="">
        <div class="steps__content" data-target="step-3">
          <div class="flow">
            <p class="text-muted"><small>QUESTION 3 OF 4</small></p>
            <h1 class="heading-primary">How much do you earn?</h1>
            <p class="text-muted">
                Select your annual income range to get personalized tax
                guidance
            </p>
          </div>
          <div class="earning-layout-container">
            <div>
              <form class="earning-forms">
                <div>
                  <p class="form-title">
                    <small>BASIC INFORMATION</small>
                  </p>
                  <div class="form-container">
                    <div class="basic-info-form">
                      <div class="naira-input-field required">
                        <div class="input-label-container">
                          <label for="gross-income"
                            >Gross annual income (₦)
                          </label>
                          <div class="dropdown">
                            <button class="dropdown__trigger" type="button">
                              <i class="ri-information-line text-muted"></i>
                            </button>
                            <div class="dropdown__content">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </div>
                          </div>
                        </div>
                        <div class="input-wrapper">
                          <input
                            required
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="gross-annual-income"
                            placeholder="0.00"
                            value="${safeVal(grossAnnualIncome)}"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="form-title">
                    <small>ADDITIONAL INFORMATION (OPTIONAL)</small>
                  </p>
                  <div class="form-container">
                    <div class="additional-info-form">
                      <div class="naira-input-field">
                        <div class="input-label-container">
                          <label for="nhf-contribution"
                            >NHF Contribution (Annual)
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="nhf-contribution"
                            placeholder="0.00"
                            value="${safeVal(nhfContribution)}"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field">
                        <div class="input-label-container">
                          <label for="nhis-contribution"
                            >NHIS Contribution (Annual)
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="nhis-contribution"
                            placeholder="0.00"
                            value="${safeVal(nhisContribution)}"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="pension-contribution"
                            >Pension Contribution (Annual)
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="pension-contribution"
                            placeholder="0.00"
                            value="${safeVal(pensionContribution)}"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="interest-on-loan"
                            >Interest on Loan
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="interest-on-loan"
                            placeholder="0.00"
                            value="${safeVal(interestOnLoan)}"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="life-insurance-premium"
                            >Life Insurance Premium (You & Spouse)
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="life-insurance-premium"
                            placeholder="0.00"
                            value="${safeVal(lifeInsurancePremium)}"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="annual-rent"
                            >Annual Rent
                          </label>
                          ${dropdownHtmlString({
                            contentHtmlString: `
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Non illum possimus doloremque blanditiis
                              minus velit repellendus illo culpa, delectus
                              consequatur!
                            </p>
                            `,
                          })}
                        </div>
                        <div class="input-wrapper">
                          <input
                            type="text"
                            inputmode="decimal"
                            class="currency-input"
                            id="annual-rent"
                            placeholder="0.00"
                            value="${safeVal(annualRent)}"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ${coloredCardString({
                  variant: "orange",
                  className: "colored-card--info colored-card--small",
                  children: `
                  <div>
                    <i class="ri-information-line"></i>
                    <span>
                      National Minimum Wage Earners (₦800,000 annual income or less) are EXEMPT from PAYE tax
                    </span>
                  </div>`,
                })}
                <div class="buttons-container">
                  <button type="button" class="btn btn--outline previous-button">
                    <i class="ri-arrow-left-long-line"></i> Back
                  </button>
                  <!-- Changed to type=button to handle validation manually in JS -->
                  <button type="button" class="btn btn--primary btn--wide submit-button">
                    Calculate tax <i class="ri-arrow-right-long-line"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
};
