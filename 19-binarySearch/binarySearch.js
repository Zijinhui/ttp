class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let arr = nums
    let mid = Math.floor(arr.length/2)

    if(arr.length === 1 && arr[0] != target) {
      return false
    }

    if(arr[mid] === target) {
      return true
    } else if (target < arr[mid]) {
      return this.binarySearch(arr.slice(0,mid), target)
    } else if (target > arr[mid]) {
      return this.binarySearch(arr.slice(mid), target)
    }
    

  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;