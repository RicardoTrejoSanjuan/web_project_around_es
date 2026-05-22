import {
  profileName,
  profileDescription,
} from "../selectors/profile.elements.js";
import {
  editPopupNameInput,
  editPopupDescriptionInput,
  editPopup,
  editFormPopup,
} from "../selectors/popup.elements.js";
import { openModal, closeModal } from "../utils/modal.js";
import { resetValidation } from "./validate.js";

/**
 *  Popup Edit Profile Functions
 */

const fillProfileForm = () => {
  editPopupNameInput.value = profileName.textContent;
  editPopupDescriptionInput.value = profileDescription.textContent;
};

export const handleOpenEditModal = () => {
  fillProfileForm();
  resetValidation(editFormPopup);

  openModal(editPopup);
};

export const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  profileName.textContent = editPopupNameInput.value;
  profileDescription.textContent = editPopupDescriptionInput.value;

  closeModal(editPopup);
};
