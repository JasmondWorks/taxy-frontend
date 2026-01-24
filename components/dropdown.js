export const dropdownHtmlString = ({ contentHtmlString }) => {
  return `
    <div class="dropdown">
        <button class="dropdown__trigger" type="button">
          <i class="ri-information-line text-muted"></i>
        </button>
        <div class="dropdown__content">
          ${contentHtmlString}
        </div>
    </div>`;
};
