function checkInputTypePositiveNumber(input) {
  return !Number.isNaN(input) && input > 0;
}

function checkNumberLength(number, limitLength) {
  const stringNumber = String(number);
  return stringNumber.length === limitLength;
}

function checkNumberDuplication(number) {
  const numberSet = new Set([...number]);
  const stringNumber = String(number);
  return numberSet.size === stringNumber.length;
}

module.exports = {
  checkInputTypePositiveNumber,
  checkNumberDuplication,
  checkNumberLength,
};
