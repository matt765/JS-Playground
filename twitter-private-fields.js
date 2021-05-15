// Private Fields: Designing Twitter
// Source of instructions https://edabit.com/challenge/Nc75jSjR5nuBfx7TK

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
