export const coloredCardString = ({
  title,
  subtitle,
  icon,
  children,
  variant,
  className,
}) => {
  return `<div class="colored-card colored-card--${variant} ${className}">
            ${
              icon
                ? `
            <div class="colored-card__icon">
              ${icon}
            </div>`
                : ""
            }
            <div class="colored-card__content">
              ${title ? `<h3 class="colored-card__title">${title}</h3>` : ""}
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
