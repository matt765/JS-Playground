// Length of a Nested Array
// Source: Edabit.com

// The .length property on an array will return the number of elements in the array.
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
// Write a function that returns the total number of non-nested items in a nested array. An empty array should return 0.
// Examples
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5

function totalLength(arr) {
  let result = 0;
  if (arr.length == 0) {
    return 0;
  }
  else {
    arr.forEach((item) => {
        if (Array.isArray(item)){
          let recursion = totalLength(item);
          result += recursion;
        }
        else {
          result++
        }
    })
  }
  return result;
}

//since 2019 it's doable with flat()
