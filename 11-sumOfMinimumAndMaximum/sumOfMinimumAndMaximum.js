function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let copy = nums.map(function(e){
    return e
  })

  copy = copy.sort(function(a,b){
      return a-b
  })


  return copy[0]+copy[copy.length-1]
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;