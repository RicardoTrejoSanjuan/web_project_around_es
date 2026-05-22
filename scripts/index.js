import { initialCards } from "./cards.js";
import { renderCard } from "./features/card.js";
import { initListeners } from "./features/events.js";
import { enableValidation } from "./features/validate.js";

/**
 *  Init Cards
 */
const initCards = () => {
  initialCards.forEach(renderCard);
};

const main = () => {
  initialCards.forEach(({ name }) => console.log(name));

  initCards();
  initListeners();
  enableValidation();
};

main();
