const User = require('../src/User')

// User tests here

// test username

// test password

// test age

// test login

// test logout

describe("User", () => {
    let user;
  
    beforeEach(() => {
      user = new User("username", "password", 18);
    });
  
    test("should store the correct username, password, and age", () => {
      expect(user.username).toBe("username");
      expect(user.password).toBe("password");
      expect(user.age).toBe(18);
    })
  
    test("should not be logged in by default", () => {
      expect(user.loggedIn).toBe(false);
    })
  
    test("should log in correctly with the correct password", () => {
      user.login("password");
      expect(user.loggedIn).toBe(true);
    })
  
    test("should throw an error with an incorrect password", () => {
      expect(() => user.login("incorrect")).toThrowError("Incorrect password");
      expect(user.loggedIn).toBe(false);
    })
  
    test("should log out correctly", () => {
      user.login("password");
      user.logout();
      expect(user.loggedIn).toBe(false);
    })
  });
  