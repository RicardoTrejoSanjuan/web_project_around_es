import {
  profileEditBtn,
  profileAddCardBtn,
} from "../selectors/profile.elements.js";
import { openModal, closeModal } from "../utils/modal.js";
import { handleOpenEditModal, handleProfileFormSubmit } from "./profile.js";
import { handleCardFormSubmit } from "./card.js";
import {
  editPopup,
  editPopupCloseBtn,
  editFormPopup,
  newCardPopup,
  newCardPopupCloseBtn,
  newCardFormPopup,
  imagePopup,
  imagePopupCloseBtn,
} from "../selectors/popup.elements.js";
import { resetValidation } from "./validate.js";

export const initListeners = () => {
  // Edit profile
  profileEditBtn.addEventListener("click", handleOpenEditModal);
  editPopupCloseBtn.addEventListener("click", () => closeModal(editPopup));
  editFormPopup.addEventListener("submit", handleProfileFormSubmit);

  // New card
  profileAddCardBtn.addEventListener("click", () => {
    newCardFormPopup.reset();
    resetValidation(newCardFormPopup);
    openModal(newCardPopup);
  });
  newCardPopupCloseBtn.addEventListener("click", () =>
    closeModal(newCardPopup),
  );
  newCardFormPopup.addEventListener("submit", handleCardFormSubmit);

  // Image Modal
  imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));
};
