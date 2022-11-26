const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  },

  printCurrentResult(strikeCount, ballCount) {
    if (strikeCount + ballCount === 0) MissionUtils.Console.print('낫싱');
    if (strikeCount === 0 && ballCount > 0)
      MissionUtils.Console.print(`${ballCount}볼`);
    if (strikeCount > 0 && ballCount === 0)
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    if (strikeCount > 0 && ballCount > 0)
      MissionUtils.Console.print(`${strikeCount}스트라이크 ${ballCount}볼`);
  },
};

module.exports = OutputView;
