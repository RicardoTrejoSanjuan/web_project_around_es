import {
  imagePopup,
  imagePopupImage,
  imagePopupCaption,
  newCardPopup,
  newCardPopupNameInput,
  newCardPopupDescriptionInput,
} from "../selectors/popup.elements.js";
import { cardTemplate, cardsSelector } from "../selectors/card.elements.js";
import { openModal, closeModal } from "../utils/modal.js";

export const getCardElement = (cardData) => {
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

const setupCardEvents = (cardElement, card, cardData) => {
  const { likeBtn, deleteBtn, image } = card;

  likeBtn.addEventListener("click", () => handleToggleLike(likeBtn));
  deleteBtn.addEventListener("click", () => handleDeleteCard(cardElement));
  image.addEventListener("click", () =>
    openImageModal(cardData.name, cardData.link),
  );
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

export const handleCardFormSubmit = (event) => {
  event.preventDefault();

  const cardElement = getCardElement({
    name: newCardPopupNameInput.value,
    link: newCardPopupDescriptionInput.value,
  });

  cardsSelector.prepend(cardElement);

  closeModal(newCardPopup);

  event.target.reset();
};

export const renderCard = (cardData) => {
  cardsSelector.append(getCardElement(cardData));
};
