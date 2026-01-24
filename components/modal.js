export const modalHtmlString = ({ id, title, body, footer }) => {
  return `
    <div class="modal" id="${id}">
        <div class="modal__content">
            <button class="modal__close">
                <i class="ri-close-line"></i>
            </button>
            ${
              title
                ? `<div class="modal__header">
                <h2 class="modal__title">${title}</h2>
            </div>`
                : ""
            }
            <div class="modal__body">${body}</div>
            ${footer ? `<div class="modal__footer">${footer}</div>` : ""}
        </div>
    </div>`;
};
