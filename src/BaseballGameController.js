const { printStart } = require('./view/OutputView');
const { readGameNumber } = require('./view/InputView');

class BaseballGameController {
  #model;

  constructor(model) {
    this.#model = model;
  }

  controlException(error) {
    console.log(error);
  }

  renderStart() {
    printStart();
  }

  setUserGameNumber(number) {
    try {
      this.#model.setUserNumber(number);
    } catch (error) {
      this.controlException(error);
    }
  }

  readUserGameNumber() {
    readGameNumber((number) => {
      this.setUserGameNumber(number);
    });
  }
}

module.exports = BaseballGameController;
