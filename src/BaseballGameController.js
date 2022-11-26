const MissionUtils = require('@woowacourse/mission-utils');
const {
  printStart,
  printCurrentResult,
  printGameEnd,
  printError,
} = require('./view/OutputView');
const { readGameNumber, readGameCommand } = require('./view/InputView');
const ComputerNumber = require('./ComputerNumber');
const {
  checkGameCommand,
  checkLength,
  checkNumberRange,
  checkDuplication,
} = require('./Validation');

class BaseballGameController {
  #model;

  constructor(model) {
    this.#model = model;
  }

  controlException(error) {
    printError(error.message);
    this.finishGame();
  }

  setComputerNumber() {
    const computerNumber = ComputerNumber.generate();
    this.#model.setComputerNumber(computerNumber);
  }

  renderStart() {
    printStart();
  }

  validateUserGameNumber(number) {
    checkNumberRange(Number(number));
    checkLength(number, 3);
    checkDuplication(number);
  }

  setUserGameNumber(number, resolve) {
    try {
      this.validateUserGameNumber(number);
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

  renderGameEnd() {
    printGameEnd();
  }

  setUserCommand(command, resolve) {
    try {
      checkGameCommand(Number(command));
      this.#model.setCommand(Number(command));
      resolve();
    } catch (error) {
      this.controlException(error);
    }
  }

  readUserGameCommand(resolve) {
    readGameCommand((command) => {
      this.setUserCommand(command, resolve);
    });
  }

  finishGame() {
    MissionUtils.Console.close();
  }
}

module.exports = BaseballGameController;
