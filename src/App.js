const MissionUtils = require('@woowacourse/mission-utils');
const {
  checkInputTypePositiveNumber,
  checkNumberDuplication,
  checkNumberLength,
  getMatchCount,
  convertNumberToStringArray,
} = require('./utils');

const CORRECT_ANSWER = '3스트라이크';
const RESTART = '1';
const END = '2';

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

  #checkUserNumberValid(userInput) {
    const isInputNumberValid =
      checkInputTypePositiveNumber(userInput) &&
      checkNumberLength(userInput, 3) &&
      checkNumberDuplication(userInput);

    return isInputNumberValid;
  }

  #setUserNumber(number) {
    if (this.#checkUserNumberValid(number)) {
      this.#userNumber = number;
      this.#getMatchResult();
    } else {
      throw '⚠️ 양수 1부터 9 안에서 서로 다른 세개의 숫자를 입력해주세요!';
    }
  }

  #getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.#setUserNumber(number);
    });
  }

  #compareUserNumberWithAnswer(answer, userNumber) {
    const answerArray = convertNumberToStringArray(answer);
    const userNumberArray = convertNumberToStringArray(userNumber);
    return getMatchCount(answerArray, userNumberArray);
  }

  #getResultString() {
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

  #endProcess() {
    const END_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    MissionUtils.Console.print(END_MESSAGE);
    MissionUtils.Console.print(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    );
    MissionUtils.Console.readLine('', (number) => {
      if (number === RESTART) this.play();
      if (number === END) MissionUtils.Console.close();
    });
  }

  #getMatchResult() {
    this.#result = this.#compareUserNumberWithAnswer(
      this.#answer,
      this.#userNumber,
    );
    const resultString = this.#getResultString();
    MissionUtils.Console.print(resultString);
    if (resultString === CORRECT_ANSWER) {
      this.#endProcess();
    } else {
      this.#getUserNumber();
    }
  }

  async #guessProcess(guessStart) {
    while (guessStart) {
      const inputNumber = await this.#getUserNumber();
      this.#userNumber = this.#checkUserNumberValid(inputNumber);
      this.#result = this.#compareUserNumberWithAnswer(
        this.#answer,
        this.#userNumber,
      );
      const matchResult = this.#getMatchResult();
      MissionUtils.Console.print(matchResult);
      if (matchResult === CORRECT_ANSWER) return;
    }
  }

  play() {
    this.#initialize();
    this.#getUserNumber();
    // const guessStart = true;
    // await this.#guessProcess(guessStart);
    // const endNumber = await this.#endProcess();
    // if (endNumber === RESTART) this.play();
    // if (endNumber === END) MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
