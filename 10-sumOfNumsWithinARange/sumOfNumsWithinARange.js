function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let e = nums.indexOf(end)
  let s =nums.indexOf(start)
  if (s>e) {
    return -1
  }
  return e-s
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;