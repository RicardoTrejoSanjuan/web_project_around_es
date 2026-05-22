/**
 *  Edit Profile Modal Elements
 */
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseBtn = editPopup.querySelector(".popup__close");
const editPopupNameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupDescriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);
const editFormPopup = editPopup.querySelector("#edit-profile-form");

/**
 *  New Card Modal Elements
 */
const newCardPopup = document.querySelector("#new-card-popup");
const newCardPopupCloseBtn = newCardPopup.querySelector(".popup__close");
const newCardPopupNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const newCardPopupDescriptionInput = newCardPopup.querySelector(
  ".popup__input_type_url",
);
const newCardFormPopup = newCardPopup.querySelector("#new-card-form");

/**
 * Image Popup Elements
 */
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

export {
  editPopup,
  editPopupCloseBtn,
  editPopupNameInput,
  editPopupDescriptionInput,
  editFormPopup,
  newCardPopup,
  newCardPopupCloseBtn,
  newCardPopupNameInput,
  newCardPopupDescriptionInput,
  newCardFormPopup,
  imagePopup,
  imagePopupCloseBtn,
  imagePopupImage,
  imagePopupCaption,
};
