const MissionUtils = require('@woowacourse/mission-utils');
const {
  checkInputTypePositiveNumber,
  checkNumberDuplication,
  checkNumberLength,
  getMatchCount,
  convertNumberToStringArray,
} = require('./utils');

class App {
  #answer;
  #userNumber;
  #result;

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

  async #getUserNumber() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
        resolve(number);
      });
    });
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

  #compareUserNumberWithAnswer(answer, userNumber) {
    const answerArray = convertNumberToStringArray(answer);
    const userNumberArray = convertNumberToStringArray(userNumber);
    return getMatchCount(answerArray, userNumberArray);
  }

  #getMatchResult() {
    const strikeCount = this.#result.strike;
    const ballCount = this.#result.ball;
    const isNothing = strikeCount === 0 && ballCount === 0;
    const isOnlyBallCount = strikeCount === 0 && ballCount !== 0;
    const isOnlyStrikeCount = strikeCount !== 0 && ballCount === 0;
    if (isNothing) return '낫싱';
    if (isOnlyBallCount) return `${ballCount}볼`;
    if (isOnlyStrikeCount) return `${strikeCount}스트라이크`;

    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }

  async play() {
    this.#initialize();
    const inputNumber = await this.#getUserNumber();
    this.#userNumber = this.#checkUserNumberValid(inputNumber);
    this.#result = this.#compareUserNumberWithAnswer(
      this.#answer,
      this.#userNumber,
    );
    MissionUtils.Console.print(this.#getMatchResult());
  }
}

module.exports = App;
