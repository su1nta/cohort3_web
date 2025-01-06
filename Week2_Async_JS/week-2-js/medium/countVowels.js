/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let numVowels = 0
  str = str.toLowerCase().split('')
  str.forEach((c) => {
    if(vowels.includes(c)){numVowels += 1}
  })
  return numVowels;
}

module.exports = countVowels;