export const coloredCardString = ({
  title,
  subtitle,
  icon,
  children,
  variant,
}) => {
  return `<div class="colored-card colored-card--${variant}">
            <div class="colored-card__icon">
              ${icon}
            </div>
            <div class="colored-card__content">
              <h3 class="colored-card__title">${title}</h3>
              ${
                subtitle
                  ? `<p class="colored-card__description text-muted">
                <small
                  >${subtitle}</small
                >
              </p>`
                  : ""
              }
              ${children ? children : ""}
            </div>
          </div>`;
};
