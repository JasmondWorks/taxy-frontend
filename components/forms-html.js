export const formsHtmlString = () => `
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
                            type="number"
                            min="0"
                            id="gross-annual-income"
                            placeholder="0.00"
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
                            type="number"
                            min="0"
                            id="nhf-contribution"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field">
                        <div class="input-label-container">
                          <label for="nhis-contribution"
                            >NHIS Contribution (Annual)
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
                            type="number"
                            min="0"
                            id="nhis-contribution"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="pension-contribution"
                            >Pension Contribution (Annual)
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
                            type="number"
                            min="0"
                            id="pension-contribution"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="interest-on-loan"
                            >Interest on Loan
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
                            type="number"
                            min="0"
                            id="interest-on-loan"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="life-insurance-premium"
                            >Life Insurance Premium (You & Spouse)
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
                            type="number"
                            min="0"
                            id="life-insurance-premium"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div class="naira-input-field ">
                        <div class="input-label-container">
                          <label for="annual-rent"
                            >Annual Rent
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
                            type="number"
                            min="0"
                            id="annual-rent"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  <div class="buttons-container">
                <button type="button" class="btn btn--outline previous-button">
                  <i class="ri-arrow-left-long-line"></i> Previous
                </button>
                <!-- Changed to type=button to handle validation manually in JS -->
                <button type="button" class="btn btn--primary btn--wide submit-button">
                  Calculate tax <i class="ri-arrow-right-long-line"></i>
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>`;
