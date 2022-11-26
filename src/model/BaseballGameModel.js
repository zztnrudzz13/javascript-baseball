class BaseballGameModel {
  #userNumber;
  #computerNumber;
  #strike;
  #ball;

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
}

module.exports = BaseballGameModel;
