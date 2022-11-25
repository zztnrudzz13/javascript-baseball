class BaseballGame {
  #controller;
  #model;

  constructor(model, controller) {
    this.#model = model;
    this.#controller = controller;
  }

  match() {
    console.log(this.#model.getUserNumber());
    console.log(this.#model.getComputerNumber());
  }

  start() {
    this.#controller.renderStart();
    this.#controller.setComputerNumber();
    this.#controller.readUserGameNumber(() => this.match());
  }
}

module.exports = BaseballGame;
