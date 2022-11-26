const { printStart, printCurrentResult } = require('./view/OutputView');
const { readGameNumber } = require('./view/InputView');
const ComputerNumber = require('./ComputerNumber');

class BaseballGameController {
  #model;

  constructor(model) {
    this.#model = model;
  }

  controlException(error) {
    console.log(error);
  }

  setComputerNumber() {
    const computerNumber = ComputerNumber.generate();
    this.#model.setComputerNumber(computerNumber);
  }

  renderStart() {
    printStart();
  }

  setUserGameNumber(number, resolve) {
    try {
      const numbers = Array.from(String(number), (num) => Number(num));
      this.#model.setUserNumber(numbers);
      resolve();
    } catch (error) {
      this.controlException(error);
    }
  }

  setCurrentResult(strikeCount, ballCount) {
    this.#model.setStrikeCount(strikeCount);
    this.#model.setBallCount(ballCount);
  }

  renderCurrentResult() {
    const strikeCount = this.#model.getStrikeCount();
    const ballCount = this.#model.getBallCount();
    printCurrentResult(strikeCount, ballCount);
  }

  readUserGameNumber(resolve) {
    readGameNumber((number) => {
      this.setUserGameNumber(number, resolve);
    });
  }
}

module.exports = BaseballGameController;
