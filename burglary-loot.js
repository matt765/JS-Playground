// Burglary Series: Add its Name
// Source: Edabit.com

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs). 
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// The value argument will be a number.

function burglaryLoot(obj, petName, value) {
  let burglaryList = {}
  burglaryList[petName] = value;
  for (const lootName in obj) {
    burglaryList[lootName] = obj[lootName]
  }
 return burglaryList;
}
