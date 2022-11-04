const MissionUtils = require('@woowacourse/mission-utils');
const {
  checkInputTypePositiveNumber,
  checkNumberDuplication,
  checkNumberLength,
} = require('./utils');

class App {
  #answer;
  #userNumber;

  #getComputerNumber() {
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3);
    const randomNumber = randomArray.join('');
    return randomNumber;
  }

  #initialize() {
    const START_MESSAGE = '숫자 야구게임을 시작합니다';
    MissionUtils.Console.print(START_MESSAGE);
    this.#answer = this.#getComputerNumber();
  }

  #checkUserNumberValid(userInput) {
    const isInputNumberValid =
      checkInputTypePositiveNumber(userInput) &&
      checkNumberLength(userInput, 3) &&
      checkNumberDuplication(userInput);
    if (!isInputNumberValid) {
      MissionUtils.Console.close();
      throw '⚠️ 양수 1부터 9 안에서 서로 다른 세개의 숫자를 입력해주세요!';
    }

    return userInput;
  }

  async #getUserNumber() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
        resolve(number);
      });
    });
  }

  async play() {
    this.#initialize();
    const inputNumber = await this.#getUserNumber();
    this.#userNumber = this.#checkUserNumberValid(inputNumber);
  }
}

module.exports = App;
