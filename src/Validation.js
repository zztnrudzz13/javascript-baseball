const Validation = {
  checkLength(iterator, length) {
    if (iterator.length !== length) {
      throw new Error(`${length}자리수를 입력해 주세요`);
    }
  },

  checkDuplication(iterator) {
    if (iterator.length !== new Set(iterator).size) {
      throw new Error('중복 없이 입력해 주세요.');
    }
  },

  checkNumberRange(input) {
    const regex = /^[1-9]+$/;
    if (!Number.isInteger(input) || !regex.test(input)) {
      throw new Error('1부터 9사이의 세자리수를 입력해 주세요.');
    }
  },

  checkGameCommand(command) {
    if (command !== 1 && command !== 2) {
      throw new Error('1 또는 2만 입력해 주세요.');
    }
  },
};

module.exports = Validation;
