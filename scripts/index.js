import { placeholderImage, withoutText } from "./const.js";
import { initialCards } from "./cards.js";

initialCards.forEach(({ name }) => console.log(name));

/**
 *  Profile Section
 */
const profileContent = document.querySelector(".profile");
const profileEditBtn = profileContent.querySelector(".profile__edit-button");
const profileName = profileContent.querySelector(".profile__title");
const profileDescription = profileContent.querySelector(
  ".profile__description",
);

// New card open modal button
const profileAddCardBtn = profileContent.querySelector(".profile__add-button");

/**
 *  Edit Profile Modal
 */
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseBtn = editPopup.querySelector(".popup__close");
const editPopupNameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupDescriptionInput = editPopup.querySelector(
  ".popup__input_type_description",
);
const editFormPopup = editPopup.querySelector("#edit-profile-form");

/**
 *  New Card Modal
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
 * Image Popup
 */
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
const imagePopupImage = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

/**
 *  Template card
 */
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsSelector = document.querySelector(".cards__list");

/**
 *  Generic Modal Functions
 */
const openModal = (modalWindow) => {
  modalWindow.classList.add("popup_is-opened");
};

const closeModal = (modalWindow) => {
  modalWindow.classList.remove("popup_is-opened");
};

/**
 *  Popup Edit Profile Functions
 */
const fillProfileForm = () => {
  editPopupNameInput.value = profileName.textContent;
  editPopupDescriptionInput.value = profileDescription.textContent;
};

const handleOpenEditModal = () => {
  fillProfileForm();
  openModal(editPopup);
};

const handleProfileFormSubmit = (event) => {
  event.preventDefault();

  profileName.textContent = editPopupNameInput.value;
  profileDescription.textContent = editPopupDescriptionInput.value;
  closeModal(editPopup);
};

const getCardElement = (cardData) => {
  const cardElement = cardTemplate.cloneNode(true);

  const card = {
    image: cardElement.querySelector(".card__image"),
    title: cardElement.querySelector(".card__title"),
    likeBtn: cardElement.querySelector(".card__like-button"),
    deleteBtn: cardElement.querySelector(".card__delete-button"),
  };

  setCardContent(card, cardData);
  setupCardEvents(cardElement, card, cardData);

  return cardElement;
};

const setCardContent = (card, { name, link }) => {
  const { image, title } = card;

  image.src = link || placeholderImage;
  image.alt = name || withoutText;
  title.textContent = name || withoutText;
};

const setupCardEvents = (cardElement, card, { name, link }) => {
  const { likeBtn, deleteBtn, image } = card;

  likeBtn.addEventListener("click", () => handleToggleLike(likeBtn));
  deleteBtn.addEventListener("click", () => handleDeleteCard(cardElement));
  image.addEventListener("click", () => openImageModal(name, link));
};

const handleToggleLike = (button) => {
  button.classList.toggle("card__like-button_is-active");
};

const handleDeleteCard = (cardElement) => {
  cardElement.remove();
};

const openImageModal = (name, link) => {
  imagePopupImage.src = link || placeholderImage;
  imagePopupImage.alt = name || withoutText;
  imagePopupCaption.textContent = name || withoutText;
  openModal(imagePopup);
};

const handleCardFormSubmit = (event) => {
  event.preventDefault();

  const name = newCardPopupNameInput.value;
  const link = newCardPopupDescriptionInput.value;

  const cardElement = getCardElement({ name, link });
  cardsSelector.prepend(cardElement);
  closeModal(newCardPopup);

  event.target.reset();
};

const renderCard = (cardData) => {
  const cardElement = getCardElement(cardData);
  cardsSelector.append(cardElement);
};

/**
 *  Init Cards
 */
const initCards = () => {
  initialCards.forEach(renderCard);
};

/**
 *  Event Listeners
 */
const initListeners = () => {
  // Profile Edit Modal
  profileEditBtn.addEventListener("click", handleOpenEditModal);
  editPopupCloseBtn.addEventListener("click", () => closeModal(editPopup));
  editFormPopup.addEventListener("submit", handleProfileFormSubmit);

  // New Card Modal
  profileAddCardBtn.addEventListener("click", () => openModal(newCardPopup));
  newCardPopupCloseBtn.addEventListener("click", () =>
    closeModal(newCardPopup),
  );
  newCardFormPopup.addEventListener("submit", handleCardFormSubmit);

  // Image Modal
  imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));
};

const init = () => {
  initCards();
  initListeners();
};

init();
