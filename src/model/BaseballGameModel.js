class BaseballGameModel {
  #userNumber;
  #computerNumber;
  #strike;
  #ball;
  #command;

  setUserNumber(number) {
    this.#userNumber = number;
  }

  getUserNumber() {
    return this.#userNumber;
  }

  setComputerNumber(number) {
    this.#computerNumber = number;
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  setStrikeCount(count) {
    this.#strike = count;
  }

  getStrikeCount() {
    return this.#strike;
  }

  setBallCount(count) {
    this.#ball = count;
  }

  getBallCount() {
    return this.#ball;
  }

  setCommand(command) {
    this.#command = command;
  }

  getCommand() {
    return this.#command;
  }
}

module.exports = BaseballGameModel;
