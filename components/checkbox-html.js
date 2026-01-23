import { checkboxQuestionTemplateString } from "./checkbox-question-template.js";

export const checkboxHtmlString = ({
  question,
  currentQuestionIndex,
  questions,
}) => `<div class="steps__content" data-target="step-1">
          <div class="flow">
            <p class="text-muted"><small>QUESTION ${currentQuestionIndex + 1} OF ${questions.length}</small></p>
            <h1 class="heading-primary">
              ${question.title}
            </h1>
            <p class="text-muted">
              <small
                >${question.subtitle}</small
              >
            </p>
          </div>
          <div class="checkbox-cards-container">
            ${
              question.options
                ? question.options
                    .map((option, index) =>
                      checkboxQuestionTemplateString(option, index),
                    )
                    .join("")
                : ""
            }
          </div>
          <div class="buttons-container">
            <button type="button" class="btn btn--outline previous-button">
              <i class="ri-arrow-left-long-line"></i> Previous
            </button>
            <button type="button" class="btn btn--primary btn--wide submit-button">
              Next <i class="ri-arrow-right-long-line"></i>
            </button>
          </div>
        </div>`;
