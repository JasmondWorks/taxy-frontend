import { aboutTaxHtmlString } from "../components/about-tax-html.js";
import { taxExemptionHtmlString } from "../components/below-800k-exemption-html.js";
import { checkboxHtmlString } from "../components/checkbox-html.js";
import { exemptionBusinessOwnerHtmlString } from "../components/exemption-business-owner-html.js";
import { formsHtmlString } from "../components/forms-html.js";
import { aboutTaxRuleIcon } from "../components/icons/about-tax-rule.js";
import { businessOwnerIcon } from "../components/icons/business-owner-icon.js";
import { corporateWorkerIcon } from "../components/icons/corporate-worker-icon.js";
import { freelancerIcon } from "../components/icons/freelancer.js";
import { howDoesTheNewTaxApplyIcon } from "../components/icons/how-does-the-new-tax-apply.js";
import { taxInclusionHtmlString } from "../components/tax-inclusion-html.js";
import { formatCurrency, goToPage } from "./helpers.js";

// Expose goToPage to window so it can be used in inline onclick handlers
window.goToPage = goToPage;

const questionsContainer = document.querySelector(".questions-container");

let questions = [
  {
    id: 1,
    title: "What would you like to know about the 2026 tax?",
    subtitle: "Choose the option that best fits what you're looking for",
    options: [
      {
        title: "What is the new tax rule about?",
        subtitle: null,
        icon: `<div class="checkbox-card__icon">${aboutTaxRuleIcon}</div>`,
        isSelected: false,
        titles: [],
      },
      {
        title: "How does the new tax apply to me?",
        subtitle: null,
        icon: `<div class="checkbox-card__icon">${howDoesTheNewTaxApplyIcon}</div>`,
        isSelected: false,
        titles: [],
      },
    ],
  },
  {
    id: 2,
    title: "What is your occupation?",
    subtitle: "This helps us provide accurate tax guidance for your situation",
    options: [
      {
        title: "Freelancer/Self-employed",
        titles: ["Freelancer", "Self-employed"],
        subtitle:
          "e.g. Designer, software developer, copywriter, web developer, self-employed etc",
        icon: `<div class="checkbox-card__icon">${freelancerIcon}</div>`,
        isSelected: false,
      },
      {
        title: "Business Owner",
        titles: [
          "Business Owner",
          "Entrepreneur",
          "Company",
          "Vendor",
          "Store Owner",
          "etc.",
        ],
        subtitle:
          "e.g. small business owner, entrepreneur, company, vendor, store owner, etc.",
        icon: `<div class="checkbox-card__icon">${businessOwnerIcon}</div>`,
        isSelected: false,
      },
      {
        title: "Corporate Worker",
        titles: [
          "Corporate Worker",
          "Salaried Employee",
          "Banker",
          "Nurse",
          "Driver",
          "Admin",
          "HR",
          "etc.",
        ],
        subtitle:
          "e.g. salaried employee- banker, nurse, driver, admin,HR, etc.",
        icon: `<div class="checkbox-card__icon">${corporateWorkerIcon}</div>`,
        isSelected: false,
      },
    ],
  },
  {
    id: 3,
    title: "How much do you earn?",
    subtitle:
      "Select your annual income range to get personalized tax guidance",
    grossAnnualIncome: 0,
    nhfContribution: 0,
    nhisContribution: 0,
    pensionContribution: 0,
    interestOnLoan: 0,
    lifeInsurancePremium: 0,
    annualRent: 0,
  },
  { id: 4 },
];
let currentQuestionIndex = 0;

// Check for params first to handle new session or restore results
const urlParams = new URL(window.location.href).searchParams;

if (urlParams.get("new") === "true") {
  localStorage.removeItem("questionsState");
  localStorage.removeItem("calculatedTax");
  // Clean URL without reload
  window.history.replaceState({}, document.title, "questionnaire.html");
}

// Load persisted questions state if available
const savedQuestions = localStorage.getItem("questionsState");
if (savedQuestions) {
  try {
    const parsed = JSON.parse(savedQuestions);
    if (parsed && Array.isArray(parsed.questions)) {
      questions = parsed.questions;
    }
  } catch (e) {
    console.error("Failed to parse saved questions state", e);
  }
}

// Check for view=results param to restore state correctly
if (urlParams.get("view") === "results") {
  // If viewing results, we assume we are at the end (index 3 for 4 items where 3 is result placeholder)
  // Ensure we have tax results before jumping there, otherwise fallback to 0
  if (localStorage.getItem("calculatedTax")) {
    currentQuestionIndex = 3;
  }
}

function saveQuestionsState() {
  const jobOccupation = getJobOccupation();

  localStorage.setItem(
    "questionsState",
    JSON.stringify({ questions, jobOccupation }),
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});

questionsContainer.addEventListener("click", (e) => {
  //   Toggle option
  if (e.target.classList.contains("checkbox-card")) {
    const card = e.target.closest(".checkbox-card");
    const optionIndex = parseInt(card.dataset.id);
    const currentQuestion = questions[currentQuestionIndex];

    // Deselect all options in the current question
    currentQuestion.options.forEach((opt) => (opt.isSelected = false));

    // Select the clicked option
    currentQuestion.options[optionIndex].isSelected = true;
    saveQuestionsState();

    renderQuestion();
  }

  if (e.target.classList.contains("reset-button")) {
    resetQuestionnaire();
    return;
  }

  if (e.target.classList.contains("submit-button")) {
    e.preventDefault();
  }

  if (
    e.target.classList.contains("submit-button") &&
    questions[currentQuestionIndex].options
  ) {
    submitCheckboxQuestion();
  }

  if (
    e.target.classList.contains("submit-button") &&
    !questions[currentQuestionIndex].options
  ) {
    submitFormQuestion();
  }

  if (
    e.target.classList.contains("about-tax-back-btn") ||
    e.target.closest(".about-tax-back-btn")
  ) {
    // Reset selection if needed, or just re-render question 0
    renderQuestion();
    return;
  }

  if (
    e.target.classList.contains("about-tax-next-btn") ||
    e.target.closest(".about-tax-next-btn")
  ) {
    currentQuestionIndex++;
    renderQuestion();
    return;
  }

  if (e.target.classList.contains("previous-button")) {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }
});

function renderTaxResults(calculatedTax) {
  let savedState = {};
  try {
    savedState = JSON.parse(localStorage.getItem("questionsState")) || {};
  } catch (e) {
    console.error("Failed to parse questions state", e);
  }

  // Fallback to current state if localStorage is empty or corrupt
  const jobTitles = questions[1].options.find((opt) => opt.isSelected === true);

  // Use saved jobOccupation or fallback to generating it
  let jobOccupation = savedState.jobOccupation || getJobOccupation();

  // Logic identifier requires the array of titles, which we get from the selected option
  // We prioritize the current 'questions' state which should be loaded
  let jobOccupationTitle = getJobOccupationTitle(jobTitles?.titles || []);

  function getJobOccupationTitle(titles) {
    const lowerTitles = titles.map((t) => t.toLowerCase());
    if (lowerTitles.includes("salary-earner")) {
      return "salary-earner";
    } else if (lowerTitles.includes("business owner")) {
      return "business-owner";
    } else if (lowerTitles.includes("self-employed")) {
      return "self-employed";
    } else {
      return "salary-earner";
    }
  }

  const inclusionHtml = taxInclusionHtmlString({
    jobOccupation,
    calculatedTax,
  });

  const exemptionBusinessOwnerHtml = exemptionBusinessOwnerHtmlString({
    jobOccupation,
    calculatedTax,
    formatCurrency,
  });

  const exemptionBelow800kHtml = taxExemptionHtmlString({
    jobOccupation,
    calculatedTax,
    formatCurrency,
  });

  console.log(jobOccupationTitle, calculatedTax.grossAnnualIncome);
  if (jobOccupationTitle === "business-owner") {
    return calculatedTax.grossAnnualIncome < 800000
      ? exemptionBusinessOwnerHtml
      : inclusionHtml;
  } else if (
    jobOccupationTitle === "salary-earner" ||
    jobOccupationTitle === "self-employed"
  ) {
    return calculatedTax.grossAnnualIncome < 800000
      ? exemptionBelow800kHtml
      : inclusionHtml;
  }
}

function renderStepsIndicator(currentQuestionIndex) {
  const stepHtml = questions
    .map((_, index) => {
      return `<div class="step ${index < currentQuestionIndex ? "step--completed" : ""} ${index === currentQuestionIndex ? "step--active" : ""}" data-target="step-${index + 1}">
            <span class="step__number">${index + 1}</span>
          </div>`;
    })
    .join("");

  const stepsIndicator = document.querySelector(".steps-indicator");

  stepsIndicator.innerHTML = stepHtml;
}

function renderQuestion() {
  renderStepsIndicator(currentQuestionIndex);

  const taxResults = JSON.parse(localStorage.getItem("calculatedTax"));

  // Only force results if we are at the end (index 3) AND have results.
  // Or if the URL explicitly asks for it (handled by initial index set to 3).
  // If user clicked "Previous" from results, currentQuestionIndex will be 2, so we show Q3.
  if (taxResults && currentQuestionIndex >= 3) {
    const taxResultsHtml = renderTaxResults(taxResults);
    questionsContainer.innerHTML = taxResultsHtml;
    // Re-attach listeners for the new buttons in the results page
    return;
  }

  if (currentQuestionIndex >= questions.length) {
    questionsContainer.innerHTML = `
      <div class="steps__content">
        <div class="flow">
          <h1 class="heading-primary">All done!</h1>
          <p class="text-muted">Thank you for completing the questionnaire.</p>
        </div>
      </div>`;

    return;
  }

  const question = questions[currentQuestionIndex];

  const checkboxHtml = checkboxHtmlString({
    question,
    currentQuestionIndex,
    questions,
  });

  const formsHtml = formsHtmlString({
    question,
    currentQuestionIndex,
    questions,
  });

  questionsContainer.innerHTML = question.options ? checkboxHtml : formsHtml;
}
function submitCheckboxQuestion() {
  console.log("index", currentQuestionIndex);

  if (!questions[currentQuestionIndex].options.some((o) => o.isSelected)) {
    alert("Please select at least one option");
    return;
  }

  if (currentQuestionIndex === 0 && questions[0].options[0].isSelected) {
    const questionsContainer = document.querySelector(".questions-container");

    const aboutTaxHtml = aboutTaxHtmlString();
    questionsContainer.innerHTML = aboutTaxHtml;

    return;
  }

  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    renderQuestion();
  }
}

function submitFormQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // Get values from inputs
  const grossIncomeInput = document.getElementById("gross-annual-income");

  if (!grossIncomeInput.value) {
    // Trigger browser validation UI
    const form = document.querySelector(".earning-forms");
    if (form) form.reportValidity();
    return;
  }

  const grossAnnualIncome = grossIncomeInput.value;
  const nhfContribution = document.getElementById("nhf-contribution").value;
  const nhisContribution = document.getElementById("nhis-contribution").value;
  const pensionContribution = document.getElementById(
    "pension-contribution",
  ).value;
  const interestOnLoan = document.getElementById("interest-on-loan").value;
  const lifeInsurancePremium = document.getElementById(
    "life-insurance-premium",
  ).value;
  const annualRent = document.getElementById("annual-rent").value;

  // Basic validation (only gross income required for now based on UI)
  //   if (!grossAnnualIncome) {
  //     alert("Please enter your Gross Annual Income");
  //     return;
  //   }

  // Update question object
  // Parse inputs to numbers (removing commas if any, assuming simple numeric input for now)
  // In a real app, strict parsing and format handling is needed.
  const parseCurrency = (val) => parseFloat(val.replace(/,/g, "")) || 0;

  currentQuestion.grossAnnualIncome = parseCurrency(grossAnnualIncome);
  currentQuestion.nhfContribution = parseCurrency(nhfContribution);
  currentQuestion.nhisContribution = parseCurrency(nhisContribution);
  currentQuestion.pensionContribution = parseCurrency(pensionContribution);
  currentQuestion.interestOnLoan = parseCurrency(interestOnLoan);
  currentQuestion.lifeInsurancePremium = parseCurrency(lifeInsurancePremium);
  currentQuestion.annualRent = parseCurrency(annualRent);

  saveQuestionsState();
  const calculatedTax = calculateTax(currentQuestion);

  localStorage.setItem(
    "calculatedTax",
    JSON.stringify({ ...calculatedTax, jobOccupation: getJobOccupation() }),
  );
  // Proceed
  currentQuestionIndex++;
  renderQuestion();
}

function resetQuestionnaire() {
  localStorage.clear();
  // Clear questions state specifically since we persist it now
  localStorage.removeItem("questionsState");

  questions = questions.map((q, index) => {
    if (index <= 1) {
      return {
        ...q,
        options: q.options.map((opt) => ({ ...opt, isSelected: false })),
      };
    } else if (index === 2)
      return {
        ...q,
        grossAnnualIncome: 0,
        nhfContribution: 0,
        nhisContribution: 0,
        pensionContribution: 0,
        interestOnLoan: 0,
        lifeInsurancePremium: 0,
        annualRent: 0,
      };
    else return q;
  });

  currentQuestionIndex = 0;
  renderQuestion();
}

function calculateTax({
  grossAnnualIncome,
  nhfContribution = 0,
  nhisContribution = 0,
  pensionContribution = 0,
  interestOnLoan = 0,
  lifeInsurancePremium = 0,
  annualRent = 0,
}) {
  // Calculate Rent Relief: Lower of 20% of annual rent or N500,000
  const rentRelief = Math.min(annualRent * 0.2, 500000);

  // Calculate Total Reliefs
  const totalReliefs =
    nhfContribution +
    nhisContribution +
    pensionContribution +
    interestOnLoan +
    lifeInsurancePremium +
    rentRelief;

  // Calculate Chargeable Income (Gross - Reliefs)
  // Ensure it doesn't go below zero
  let taxableIncome = Math.max(0, grossAnnualIncome - totalReliefs);

  const totalTax = [];

  const taxBrackets = [
    { bracket: "First ₦800,000", rate: 0, limit: 800000 },
    { bracket: "Next ₦2,200,000", rate: 0.15, limit: 2200000 },
    { bracket: "Next ₦9,000,000", rate: 0.18, limit: 9000000 },
    { bracket: "Next ₦13,000,000", rate: 0.21, limit: 13000000 },
    { bracket: "Next ₦25,000,000", rate: 0.23, limit: 25000000 },
    { bracket: "Next ₦50,000,000", rate: 0.25, limit: 50000000 },
  ];

  // Logic to handle income exceeding the highest bracket defined
  // The last bracket (Next 50m) is effectively "Over 50m" if we treat it as the top
  // However, usually there is a "Above X" bracket. Based on the provided list,
  // we will assume the last bracket covers everything else or strictly follows the limit.
  // Standard Nigerian tax usually has a top bracket for "Above X".
  // Assuming the provided brackets is the complete set for this calculation context.
  // If taxable income exceeds all brackets, the excess might need a rate.
  // For now, we will strictly follow the limits provided.
  // If there's a need for an "Above" bracket, it should be added.
  // *Correction*: In many systems the last bracket is open-ended.
  // The user provided "Next 50,000,000 @ 25%".
  // We will assume any amount above the sum of all limits is taxed at the highest rate (25%)
  // OR we strictly follow the user provided list. Length of list implies a cap or missing top bracket.
  // Let's implement it to strictly follow the loop, effectively taxing up to the total limit sum coverage.
  // BUT, usually "Next 50m" implies a band. I will treat the last bracket as the final band for now.
  // Ideally, there should remain a "Over X" bracket.
  // Given the user prompt specifically listed these, I will stick to them.
  // But wait, if someone earns 100bn, is the tax capped? Unlikely.
  // I will add a final catch-all if taxableIncome > 0 after loop, using the top rate (25%).

  for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];

    // Determine the amount of income that falls into this bracket
    const incomeInBracket = Math.min(taxableIncome, bracket.limit);

    const taxDue = incomeInBracket * bracket.rate;

    totalTax.push({
      bracket: bracket.bracket,
      taxableIncome: incomeInBracket,
      taxDue: taxDue,
    });

    taxableIncome -= incomeInBracket;

    // Stop if no more income to tax
    if (taxableIncome <= 0) break;
  }

  // Handle any remaining income above the defined brackets (Exceeding ~100m total defined limits)
  // Warning: User didn't provide a "Above X" bracket.
  // I will append it as "Balance" at 25% (highest rate observed) to be safe,
  // or just leave it untaxed if that's the strict requirement.
  // Given the explicit list, I'll stop at the loop.
  // BUT, logically, the last bracket often acts as the "rest".
  // Let's stick to the loop logic which consumes `taxableIncome` step by step.
  // If `taxableIncome` > 0 after loop, it means income exceeded 800k+2.2m+9m+13m+25m+50m = 100m.
  // I will add a check for any remainder.

  if (taxableIncome > 0) {
    totalTax.push({
      bracket: "Above ₦100,000,000",
      taxableIncome: taxableIncome,
      taxDue: taxableIncome * 0.25, // Assuming top rate continues
    });
  }

  const calculatedTaxAmount = totalTax.reduce(
    (acc, curr) => acc + curr.taxDue,
    0,
  );

  return {
    totalTax,
    calculatedTaxAmount,
    totalReliefs,
    chargeableIncome: Math.max(0, grossAnnualIncome - totalReliefs),
    grossAnnualIncome,
    nhfContribution,
    nhisContribution,
    pensionContribution,
    interestOnLoan,
    lifeInsurancePremium,
    annualRent,
  };
}

function getJobOccupation() {
  const jobTitles = questions[1].options.find((opt) => opt.isSelected === true);
  return `${jobTitles?.titles[0]} (${jobTitles?.titles.slice(1).join(", ")})`;
}
