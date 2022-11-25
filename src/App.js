const BaseballGame = require('./BaseballGame');
const BaseballGameController = require('./BaseballGameController');
const BaseballGameModel = require('./model/BaseballGameModel');

const baseballGameModel = new BaseballGameModel();
const baseballGameController = new BaseballGameController(baseballGameModel);

class App {
  play() {
    const baseballGame = new BaseballGame(
      baseballGameModel,
      baseballGameController,
    );
    baseballGame.start();
  }
}

const app = new App();
app.play();

module.exports = App;
