document.addEventListener("click", (e) => {
  // Dropdown Toggle
  const dropdownTrigger = e.target.closest(".dropdown__trigger");
  if (dropdownTrigger) {
    const dropdown = dropdownTrigger.closest(".dropdown");
    const content = dropdown.querySelector(".dropdown__content");

    // Close others
    document.querySelectorAll(".dropdown--active").forEach((d) => {
      if (d !== dropdown) {
        d.classList.remove("dropdown--active");
        d.classList.remove("dropdown--up");
        d.classList.remove("dropdown--right");
        d.classList.remove("dropdown--center");
      }
    });

    if (dropdown.classList.contains("dropdown--active")) {
      dropdown.classList.remove("dropdown--active");
      dropdown.classList.remove("dropdown--up");
      dropdown.classList.remove("dropdown--right");
      dropdown.classList.remove("dropdown--center");
    } else {
      // Calculate position before showing
      dropdown.classList.remove("dropdown--up");
      dropdown.classList.remove("dropdown--right");
      dropdown.classList.remove("dropdown--center");

      const rect = dropdownTrigger.getBoundingClientRect();
      // Content is in DOM but hidden with opacity.
      // We need to ensure it's measureable.
      const contentHeight = content.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceBelow < contentHeight + 10) {
        // 10px buffer
        dropdown.classList.add("dropdown--up");
      }

      // Horizontal check
      const contentWidth = content.offsetWidth;
      const viewportWidth = window.innerWidth;

      // Center check for mobile
      const triggerCenter = rect.left + rect.width / 2;
      const isMobile = viewportWidth < 768;
      const isCentered =
        triggerCenter > viewportWidth * 0.35 &&
        triggerCenter < viewportWidth * 0.65;

      if (isMobile && isCentered) {
        dropdown.classList.add("dropdown--center");
      }
      // Right check
      else if (
        (contentWidth > 0 && rect.left + contentWidth > viewportWidth - 20) ||
        rect.left > viewportWidth - 320
      ) {
        dropdown.classList.add("dropdown--right");
      }

      dropdown.classList.add("dropdown--active");
    }
    e.stopPropagation();
  }

  // Close dropdowns on click outside
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown--active").forEach((d) => {
      d.classList.remove("dropdown--active");
      d.classList.remove("dropdown--up");
      d.classList.remove("dropdown--right");
      d.classList.remove("dropdown--center");
    });
  }

  // Modal
  const modalTrigger = e.target.closest(".modal-trigger");
  if (modalTrigger) {
    const targetId = modalTrigger.dataset.target;
    const modal = document.querySelector(targetId);
    if (modal) {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }
  }

  // Close Modal (Button or Overlay Click)
  const modalClose = e.target.closest(".modal__close");
  const isOverlay = e.target.classList.contains("modal");

  if (modalClose || isOverlay) {
    const modal = e.target.closest(".modal");
    if (modal) {
      modal.classList.remove("is-open");
      document.body.style.overflow = ""; // Restore scrolling
    }
  }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const openModal = document.querySelector(".modal.is-open");
    if (openModal) {
      openModal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }
});

// Close dropdowns on scroll
window.addEventListener(
  "scroll",
  () => {
    document.querySelectorAll(".dropdown--active").forEach((d) => {
      d.classList.remove("dropdown--active");
      d.classList.remove("dropdown--up");
      d.classList.remove("dropdown--right");
      d.classList.remove("dropdown--center");
    });
  },
  { passive: true },
);
