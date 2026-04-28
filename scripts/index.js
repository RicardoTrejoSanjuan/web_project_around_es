/**
 *  DATA: Initial Cards
 */
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

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
  editPopupNameInput.setAttribute("value", profileName.textContent);
  editPopupDescriptionInput.setAttribute(
    "value",
    profileDescription.textContent,
  );
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

/**
 *  Event Listeners
 */
profileEditBtn.addEventListener("click", handleOpenEditModal);
editPopupCloseBtn.addEventListener("click", () => closeModal(editPopup));
editFormPopup.addEventListener("submit", handleProfileFormSubmit);
