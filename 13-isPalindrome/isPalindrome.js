function isPalindrome(word) {
  // Insert code here;
  if (word.length === 1) {
    return true
  }
  let i = 0;
  let j = word.length-1
  while (i<j) {
    if(word.charAt(i) != word.charAt(j)) {
      return false
    }
    i++
    j--
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;