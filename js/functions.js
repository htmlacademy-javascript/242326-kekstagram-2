/*
  Функция для проверки длины строки.
  Она принимает строку, которую нужно проверить на максимальную длину,
  и возвращает true, если строка меньше или равна указанной длине
  и false, если строка длиннее.
*/

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}
// стрелочной функцией:

/*
  const checkStringLength = (string, maxLength) => string.length <= maxLength;
*/

/*
  Функция для проверки, является ли строка палиндромом.
  Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево.
*/

function isPalindrome (string = '') {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString.at(i);
  }
  return reversedString === normalizedString;
}

// стрелочной функцией

/*
const isPalindrome = (string = '') => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString.at(i);
  }
  return reversedString === normalizedString;
}
*/
