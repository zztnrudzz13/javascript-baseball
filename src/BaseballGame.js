class BaseballGame {
  #controller;
  #model;

  constructor(model, controller) {
    this.#model = model;
    this.#controller = controller;
  }

  start() {
    this.#controller.renderStart();
    this.#controller.readUserGameNumber();
  }
}

module.exports = BaseballGame;
