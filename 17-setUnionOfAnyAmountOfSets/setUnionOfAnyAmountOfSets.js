function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
   let sets = new Set()
  for (let set of [...args]) {
    for (let element of set) {
      sets.add(element)
    }
  }
  return sets
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;