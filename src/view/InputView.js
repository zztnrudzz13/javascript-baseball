const MissionUtils = require('@woowacourse/mission-utils');

const InputView = {
  readGameNumber(callback) {
    MissionUtils.Console.readLine('숫자를 입력해 주세요 : ', callback);
  },
};

module.exports = InputView;
