function pairSum(nums, target) {
  // Insert code here;
    if(nums.length<=1) {
    throw new exception()
  }

  let map = new Map()
  for (let i=0;i<nums.length;i++) {
    const diff=target-nums[i]
    if(map.get(diff) != undefined) {
      return true
    } else {
      map.set(nums[i], i)
    }
  }
  return false
}

// Do not edit this line;
module.exports = pairSum;