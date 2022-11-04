const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #answer;

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

  play() {
    this.#initialize();
  }
}

module.exports = App;
