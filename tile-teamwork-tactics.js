// Tile Teamwork Tactics
// Source of instructions: https://edabit.com/challenge/NHfYRHg2tDtcZyykB

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. 
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.
// You cannot move backward. If you are already on the same tile, return false, as you would be advancing away. Expect only positive integer inputs.

function possibleBonus(first, second) {
  let dice = [1, 2, 3, 4, 5, 6];
  let newDice = dice.filter((number) => {
    return first + number == second;
  })
   
  if (newDice.length !== 0) {
    return true
  }
  else {
    return false
  }
}
