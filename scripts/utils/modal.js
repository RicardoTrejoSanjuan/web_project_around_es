/**
 *  Generic Modal Functions
 */
export const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  modal.addEventListener("mousedown", handleOverlayClose);
  document.addEventListener("keydown", handleEscClose);
};

export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  modal.removeEventListener("mousedown", handleOverlayClose);
  document.removeEventListener("keydown", handleEscClose);
};

const handleOverlayClose = (event) => {
  if (event.target.classList.contains("popup")) {
    closeModal(event.target);
  }
};

const handleEscClose = (event) => {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");

    if (openedModal) {
      closeModal(openedModal);
    }
  }
};
