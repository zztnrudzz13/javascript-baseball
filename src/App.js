const MissionUtils = require('@woowacourse/mission-utils');

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
  }
}

module.exports = App;
