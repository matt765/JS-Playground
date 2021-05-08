// Do All Bigrams Exist?
// Source: Edabit.com

// You are given an input array of bigrams, and an array of words.
// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

// Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

// A bigram is string of two consecutive characters in the same word.
// If the array of words is empty, return false.

function canFind(bigrams, words) {
    return bigrams.every((bigram) =>
        words.some((word) =>
            word.includes(bigram)
        )
    )
}

