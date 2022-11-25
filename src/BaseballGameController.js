const { printStart } = require('./view/OutputView');
const { readGameNumber } = require('./view/InputView');

class BaseballGameController {
  renderStart() {
    printStart();
  }

  readUserGameNumber() {
    readGameNumber((number) => {
      // FIXME
      console.log(number);
    });
  }
}

module.exports = BaseballGameController;
