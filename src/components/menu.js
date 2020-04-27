import AbstractComponent from "./abstract-component";

const createMenuTemplate = () => (
  `<nav class="trip-controls__trip-tabs trip-tabs">

    <h2 class="visually-hidden">Switch trip view</h2>

    <a
      class="trip-tabs__btn trip-tabs__btn--active"
      href="#">
      Table
    </a>

    <a
      class="trip-tabs__btn"
      href="#">
      Stats
    </a>

  </nav>`
);

export default class Menu extends AbstractComponent {
  getTemplate() {
    return createMenuTemplate();
  }
}


