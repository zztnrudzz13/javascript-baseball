const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  renderStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  },
};

module.exports = OutputView;
