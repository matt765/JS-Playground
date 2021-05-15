// Get Student with Best Test Avg.
// Source of instructions: https://edabit.com/challenge/nSg24HbusyCQKn9xk

// Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. 
// The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name.
// getBestStudent({  John: [100, 90, 80],  Bob: [100, 70, 80]}) ➞ "John"
// getBestStudent({  Susan: [67, 84, 75, 63],  Mike: [87, 98, 64, 71],  Jim: [90, 58, 73, 86]}) ➞ "Mike"

// All students in an object will have the same amount of test scores. So no student will have taken more tests than another.

const getBestStudent = (obj) => {
    for (const element in obj) {
        const average = obj[element].reduce((a, b) =>
            (a + b)) / obj[element].length
        obj[element] = average;
    }
    const sortedStudents = Object.fromEntries(
        Object.entries(obj).sort(([, b], [, a]) => a - b)
    )
    return Object.keys(sortedStudents)[0]
}
