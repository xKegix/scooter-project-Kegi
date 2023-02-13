const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user

// log in

// log out

// rent scooter

// dock scooter


// registering user.

// need var to store instance of ScooterApp.
describe("ScooterApp", () => {
    let scooterApp;
    

    beforeEach(() => {
        scooterApp = new ScooterApp();
    })

    it("register User with age greater than or equal to 18", () => {
        const username ='Kegi';
        const password = 'admin123'
        const age = 23;

        // need user so make it.
        const user = scooterApp.registerUser(username, password, age);

        // compare actual value to expected, obj = val.
        expect(user).toEqual(expect.objectContaining({
            username: username,
            password: password,
            age: age
        }))
    })

    it("register user with existing username", () => {
        const username = 'Kegi';
        const password = 'admin123';
        const age = 23; 

        // make sample user.
        scooterApp.registerUser(username, password, age);

        expect(() => {
            scooterApp.registerUser(username, 'randomPasword', 99);
        }).toThrow('User already registered');
    }) 

    it('register user with age less than 18', () => {
        const username = 'Kegi';
        const password = 'admin123';
        const age = 17;

        expect(() => {
            scooterApp.registerUser(username, password, age);
        }).toThrow('Too young to register');
    })


    // login user method.
    it('login user with correct credentials', () => {
        const username = 'Kegi';
        const password = 'admin123';
        const age = 23;

        scooterApp.registerUser(username, password, age);

    const user = scooterApp.loginUser(username, password);

    expect(user).toEqual(expect.objectContaining({
      username: username,
      password: password,
      age: age
    }))
  })


  it('login user with incorrect credentials', () => {
    const username = 'Kegi';
    const password = 'admin123';
    const age = 20;

    scooterApp.registerUser(username, password, age);

    expect(() => {
      scooterApp.loginUser(username, 'incorrectPassword');
    }).toThrow('Username or password is incorrect');
  })

  it('login sser with non-existing user', () => {
    expect(() => {
      scooterApp.loginUser('nonExistingUsername', 'anyPassword');
    }).toThrow('Username or password is incorrect');
  })




  //logout
  it('logout a logged in user', () => {
  const scooterApp = new ScooterApp();
  const username = 'Kegi';
  const password = 'admin123';

    scooterApp.registerUser(username, password, 18);
    scooterApp.loginUser(username, password);
    scooterApp.logoutUser(username);

    const user = scooterApp.registeredUsers[username];
    expect(user.isLoggedIn()).toBe(false);
})

it('logout a user that is not logged in', () => {
    const scooterApp = new ScooterApp();
    const username = 'Kegi';
    scooterApp.registerUser(username, 'admin123', 23);
    expect(() => scooterApp.logoutUser(username)).toThrow('User is not logged in');
  })

it('logout a non-existing user', () => {
    expect(() => {
    scooterApp.logoutUser('nonExistingUsername');
    }).toThrow('No such user is logged in');
    })



    // createScooter

    test("creates a new scooter and adds it to the specified station", () => {
        scooterApp.stations["Station 1"] = [];
        const scooter = scooterApp.createScooter("Station 1");
        expect(scooter).toBeInstanceOf(Scooter);
        expect(scooterApp.stations["Station 1"].length).toBe(1);
        expect(scooterApp.stations["Station 1"][0]).toEqual(scooter);
      })
    
      test("throws error if the specified station does not exist", () => {
        expect(() => {
          scooterApp.createScooter("Station 2");
        }).toThrow("Scooter is already docked.");
      })


    

})

