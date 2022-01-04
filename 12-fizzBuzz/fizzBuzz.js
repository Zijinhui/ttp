function fizzBuzz(start, end) {
  // Insert code here;
  let arr = []
  
  for (let i = start-1; i < end; i++) {
    if ((i+1)%15 === 0) {
      arr.push("FizzBuzz") 
    } else if ((i+1)%5 === 0) {
      arr.push("Buzz")
    } else if ((i+1)%3 === 0) {
      arr.push("Fizz")
    } else {
      arr.push(i+1)
    }

  }
  return arr
}

// Do not edit this line;
module.exports = fizzBuzz;