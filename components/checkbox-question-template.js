export const checkboxQuestionTemplateString = (option, index) => {
  const html = `<div class="checkbox-card ${option.isSelected ? "checkbox-card--active" : ""}" data-id="${index}">
                <div class="checkbox-card__check">
                  <i class="ri-check-line"></i>
                </div>
                ${option.icon}
                <div class="checkbox-card__text">
                  <h3 class="checkbox-card__title">${option.title}</h3>
                  ${
                    option.subtitle
                      ? `<p class="checkbox-card__description text-muted">
                    <small
                      >${option.subtitle}</small
                    >
                  </p>`
                      : ""
                  }
                </div>
            </div>`;

  return html;
};
