function getStringLenght(string, lengthString){
  if(string.length <= lengthString){
    return true;
  }
  return false;
}

// console.log(getStringLenght('проверяемая строка', 20));
// console.log(getStringLenght('проверяемая строка', 18));
// console.log(getStringLenght('проверяемая строка', 10));

function getStringLenght2(string, lengthString) {
  return string.length <= lengthString;
}

// console.log(getStringLenght2('проверяемая строка', 20));
// console.log(getStringLenght2('проверяемая строка', 18));
// console.log(getStringLenght2('проверяемая строка', 10));


function checkIsPalindrome(string) {
  const polindromeString = string.toLowerCase().replaceAll(' ', '');
  let newString = '';

  for(let i = polindromeString.length - 1; i >= 0; i--) {
    newString += polindromeString[i];
  }

  return newString === polindromeString;

}

// console.log(checkIsPalindrome('Топот'));
// console.log(checkIsPalindrome('Кекс'));
console.log(checkIsPalindrome('А роза упала на лапу Азора'));
