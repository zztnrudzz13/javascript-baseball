const BaseballMatch = {
  getBallCount(userNumber, computerNumber) {
    let ball = 0;
    userNumber.forEach((number, index) => {
      const computerIndex = computerNumber.indexOf(number);
      if (computerIndex !== -1 && computerIndex !== index) {
        ball += 1;
      }
    });
    return ball;
  },

  getStrikeCount(userNumber, computerNumber) {
    let strike = 0;
    userNumber.forEach((number, index) => {
      const computerIndex = computerNumber.indexOf(number);
      if (computerIndex === index) {
        strike += 1;
      }
    });
    return strike;
  },
};

module.exports = BaseballMatch;
