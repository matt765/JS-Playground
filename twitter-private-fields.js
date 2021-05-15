// Private Fields: Designing Twitter
// Source of instructions https://edabit.com/challenge/Nc75jSjR5nuBfx7TK

// Design a Twitter class. Your class must:
// Private password: A private password string. Since this is private, you can name it whatever you want (as long as it's private!).
// Private tweets array: A private tweets array. Again, feel free to name this whatever you want (I should not have access to it!)
// Constructor(user, pass): A constructor that takes two arguments - a user and a pass(word) - and sets the publicly visible field this.user to the incoming user argument.
// Constructor sets password: It should also set the value of the private password field. Feel free to pass this through an encryption method if you're feeling extra fancy.
// checkPassword() Method: This method has one parameter - a string - and checks that parameter against the stored, private password, returning a boolean that basically says whether your supplied string matches the stored password.
// "blanked" password setter and getter: Attempting to read classInstance.password should just return four asterisks (****). Attempting to set the password (e.g., classInstance.password = "myNewPassword") should do nothing. That is, setting the password to a new value should not affect what "works" in the above password checker.
// tweet setter: This accepts a string and pushes the stringinto the private tweets array.
// tweet getter: Returns a copy of the array of tweets.
// tweetArray.pop() doesn't work: Running .pop() on your tweets array shouldn't 'work'. That is, if I have 5 tweets, run .pop(), and then get the length of my tweets array, it should still read 5.

// There are a few variables/methods: for this exercise that will need to be named exactly:
// classInstance.user: the username.
// classInstance.tweet: The setter for a new tweet.
// classInstance.tweets: The getter for the list of tweets
// classInstance.checkPassword(str): Checks a candidate password against the stored password.
// classInstance.password: getter that just returns four asterisks (****)

class Twitter {
  #password
  #tweets = []
  
  constructor(user,pass) {
    this.user = user;
    this.#password = this.encrypt(pass);
  }
   
  encrypt(str) {
    if (str != undefined) return '*'.repeat(str.length)
  }
  checkPassword(str) {
    return this.#password == this.encrypt(str)
  }
  get password() {
    return "****";
  }
   
  set tweet(tweet) {
    this.#tweets.push(tweet);
  }
  
  get tweets() {
    return [...this.#tweets];
  }
}
