// Encoded String Parse
// Source of instructions: https://edabit.com/challenge/qPK2Cz8LS2rGKYz7h

// Create a function which takes in an encoded string and returns an object according to the following example:
// parseCode("John000Doe000123") ➞ {firstName: "John", lastName: "Doe", id: "123"}
// parseCode("michael0smith004331") ➞ {firstName: "michael", lastName: "smith", id: "4331"}
// parseCode("Thomas00LEE0000043") ➞ {firstName: "Thomas",  lastName: "LEE",  id: "43"}

// The string will always be in the same format, first name, last name and id with zeros between them.
// id numbers will not contain any zeros.
// Bonus: Try solving this without RegEx.

const parseCode = (str) => {
  const extractedText = str.split("0");
  
  const finalArray = extractedText.filter((el) => {
    return el != ""
  })
     
  const result = {
    firstName: finalArray[0],
    lastName: finalArray[1],
    id: finalArray[2]
  }
  return result;
}
