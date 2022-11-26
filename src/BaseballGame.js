const BaseballMatch = require('./BaseballMatch');

class BaseballGame {
  #controller;
  #model;

  constructor(model, controller) {
    this.#model = model;
    this.#controller = controller;
  }

  retry() {
    console.log('retry');
  }

  end() {
    this.#controller.renderGameEnd();
    this.#controller.readUserGameCommand(() => {
      const command = this.#model.getCommand();
      if (command === 1) this.retry();
    });
  }

  checkResult() {
    this.#controller.renderCurrentResult();
    const strikeCount = this.#model.getStrikeCount();
    if (strikeCount === 3) return this.end();

    return this.#controller.readUserGameNumber(() => this.match());
  }

  match() {
    const userNumber = this.#model.getUserNumber();
    const computerNumber = this.#model.getComputerNumber();
    const strikeCount = BaseballMatch.getStrikeCount(
      userNumber,
      computerNumber,
    );
    const ballCount = BaseballMatch.getBallCount(userNumber, computerNumber);
    this.#controller.setCurrentResult(strikeCount, ballCount);
    this.checkResult();
  }

  start() {
    this.#controller.renderStart();
    this.#controller.setComputerNumber();
    console.log(this.#model.getComputerNumber());
    this.#controller.readUserGameNumber(() => this.match());
  }
}

module.exports = BaseballGame;
