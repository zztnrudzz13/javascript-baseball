const MissionUtils = require('@woowacourse/mission-utils');
const {
  checkInputTypePositiveNumber,
  checkNumberDuplication,
  checkNumberLength,
  getMatchCount,
  convertNumberToStringArray,
} = require('./utils');

const NUMBER_DIGIT_LIMIT = 3;
const RESTART = '1';
const END = '2';

class App {
  #answer;
  #userNumber;
  #result;

  #getComputerNumber() {
    const randomArray = [];
    while (randomArray.length < NUMBER_DIGIT_LIMIT) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      const hasDuplication = randomArray.includes(randomNumber);
      if (!hasDuplication) randomArray.push(randomNumber);
    }
    return randomArray.join('');
  }

  #initialize() {
    const START_MESSAGE = '숫자 야구게임을 시작합니다';
    MissionUtils.Console.print(START_MESSAGE);
    this.#answer = this.#getComputerNumber();
  }

  #checkUserNumberValid(userInput) {
    const isInputNumberValid =
      checkInputTypePositiveNumber(userInput) &&
      checkNumberLength(userInput, NUMBER_DIGIT_LIMIT) &&
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
      if (number !== RESTART && number !== END) this.#endProcess();
    });
  }

  #getMatchResult() {
    this.#result = this.#compareUserNumberWithAnswer(
      this.#answer,
      this.#userNumber,
    );
    const resultString = this.#getResultString();
    const isGuessCorrect = this.#result.strike === NUMBER_DIGIT_LIMIT;
    MissionUtils.Console.print(resultString);
    if (isGuessCorrect) {
      this.#endProcess();
    } else {
      this.#getUserNumber();
    }
  }

  play() {
    this.#initialize();
    this.#getUserNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
