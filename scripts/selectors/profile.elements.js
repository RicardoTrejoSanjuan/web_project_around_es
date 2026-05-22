/**
 *  Profile Section Elements
 */
const profileContent = document.querySelector(".profile");

const profileEditBtn = profileContent.querySelector(".profile__edit-button");
const profileName = profileContent.querySelector(".profile__title");
const profileDescription = profileContent.querySelector(
  ".profile__description",
);

// New card open modal button
const profileAddCardBtn = profileContent.querySelector(".profile__add-button");

export { profileEditBtn, profileName, profileDescription, profileAddCardBtn };
