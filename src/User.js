class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  // isLoggedin() {
  //   return this.loggedIn;
  // }

  // checkPassword(password) {
  //   return this.password === password;
  // }
  
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
  }
}

module.exports = User
