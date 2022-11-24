const { readGameNumber } = require('./view/OutputView');

class BaseballGameController {
  readUserGameNumber() {
    readGameNumber((number) => {
      // FIXME
      console.log(number);
    });
  }
}

module.exports = BaseballGameController;
