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
  let newString = '';

  for(let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString.toLocaleLowerCase() === string.toLocaleLowerCase();

}

// console.log(checkIsPalindrome('Топот'));
// console.log(checkIsPalindrome('Кекс'));
