const { printStart } = require('./view/OutputView');
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
      this.#model.setUserNumber(number);
      resolve();
    } catch (error) {
      this.controlException(error);
    }
  }

  readUserGameNumber(resolve) {
    readGameNumber((number) => {
      this.setUserGameNumber(number, resolve);
    });
  }
}

module.exports = BaseballGameController;
