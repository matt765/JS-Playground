// Guessing game
// Source of instructions: https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

// A user can enter a number
// The script picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1,    give the user 1 point. Otherwise, give the user 0 points
// The user can play the game as long as they want to
// Functions should run asynchronously

let counter = 0;

const pickNumber = () => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * 6 + 1);
        const userNumber = Number(window.prompt("Enter a number (1 - 6):"));
        if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
            reject(err)
        }
        else if (userNumber == randomNumber) {
            counter++;
            counter++;
            resolve({
                points: 2,
                userNumber,
                randomNumber
            })
        }
        else if (userNumber == randomNumber + 1 || userNumber == randomNumber - 1) {
            counter++
            resolve({
                points: 1,
                userNumber,
                randomNumber
            })
        }
        else {
            resolve({
                points: 0,
                userNumber,
                randomNumber
            })
        }
    });
};

const handleResult = () => {
    pickNumber().then((result) => {
        alert(`Random number: ${result.randomNumber}\r\nYour number: ${result.userNumber} \r\nPoints added: ${result.points}  \r\nTotal score: ${counter}`);
        continueOrNot();
    })
        .catch(err => {
            alert("You need to pick a number between 1 and 6");
            continueOrNot();
        })
};

let continueOrNot = () => {
    if (window.confirm("Do you want to play again?")) {
        handleResult()
    }
}

handleResult()
