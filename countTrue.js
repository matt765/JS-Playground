// How Much is True? 
// Source: Edabit

// Create a function which returns the number of true values there are in an array.
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

function countTrue(arr) {
  let result = 0;
  arr.forEach(item => { //this can be done by standard for loop 
    if (item === true) {
      result++;
    }
  });
 return result;
}
