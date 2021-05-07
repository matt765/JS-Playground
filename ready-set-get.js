//Ready, Set... Get!
//Source: Edabit.com

//You have to build a rudimentary architecture that will simulate a system of XP points distribution among two students that solve a series of given challenges on Edabit.
//Step 1: Build a class Challenge. The constructor parameters are id and level. The id will be the numerical identifier of the challenge, and level will be a code made of two uppercased letters:
//    "VE" = "Very Easy"
//    "EA" = "Easy"
//    "ME" = "Medium"
//    "HA" = "Hard"
//    "VH" = "Very Hard"
//    "EX" = "Expert"
//Step 2: Build a method for class Challenge. The name of the method inside class Challenge is points(). The method must return the amount of points earned solving a challenge, based on the level of the challenge:
//     VE = 5 XP
//     EA = 10 XP
//     ME= 20 XP
//     HA= 40 XP
//     VH = 80 XP
//     EX = 120 XP
//Step 3: Build a class User
//The constructor parameters are name, xp and log. The name will be, trivially, the username. The xp is the accumulator that stores the XP points earned. The log is a sort of diary of the user: is an array that will store the id of the challenges solved by the user.
//Step 4: Build a method for the class User
//The name of the method to implement inside the class User is newSolvedChallenge() and as a parameter, it will accept an object of the Challenge class.
//The method must increment the xp of the user and store the challenge id into the array log.
//Step 5: Declare the instances needed for the tests
//Step 6: The testing mechanics
//Tests will verify if after calling the properties and methods of the instance created by you, an expected result is returned. So, you don't have to return a result, but just being sure that everything is set according to Instructions.
//Examples
//user1.name ➞ "Madam"
//user2.xp ➞ 110
//user1.log ➞ [1, 4, 6]
//challenge4.level ➞ "HA"
//challenge3.id ➞ 3
//challenge1.points ➞ 5

class Challenge {
  constructor(id, level) {
    this.id = id;
    this.level = level;
  }
 
  get points() {
    let pointsObject = {
      "VE": 5,
      "EA": 10,
      "ME": 20,
      "HA": 40,
      "VH": 80,
      "EX": 120
    }
    return pointsObject[this.level]
  }
}

class User {
  constructor(name,xp,log) {
    this.name = name;
    this.xp = xp;
    this.log = log;
  }
  newSolvedChallenge(obj)  {
    this.xp += obj.points;
    this.log.push(obj.id)
  }
}

let user1 = new User("Madam", 0, []);
let user2 = new User("Steve", 0, []);

let challenge1 = new Challenge(1, "VE");
let challenge2 = new Challenge(2, "EA");
let challenge3 = new Challenge(3, "ME");
let challenge4 = new Challenge(4, "HA");
let challenge5 = new Challenge(5, "VH");
let challenge6 = new Challenge(6, "EX");

user1.newSolvedChallenge(challenge1);
user1.newSolvedChallenge(challenge4);
user1.newSolvedChallenge(challenge6);
user2.newSolvedChallenge(challenge5);
user2.newSolvedChallenge(challenge3);
user2.newSolvedChallenge(challenge2);
