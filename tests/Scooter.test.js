const Scooter = require('../src/Scooter')
const User = require('../src/User')

// //typeof scooter === object
// describe('scooter object', () => {
//   test('does something', () => {
//     // edit this to be a real test!
//     expect(false).toEqual(true);
//   }
// )
// })

// //Method tests
// describe('scooter methods', () => {
//   // tests here!

//   //rent method

//   //dock method

//   //requestRepair method

//   //charge method

// })

describe("Scooter", () => {
  
  let user;

  describe("SCOOTER RENT METHOD", () => {
    let scooter;
  })
  // create instance of scooter class and an object as user.
  // execute before each test.
  beforeEach(() => {
    scooter = new Scooter("Station 1");
    user = {name: "Kegi Philip"};
  })
  
  // rent method if scooter can be fully charged and not broken.
  test("RENT SCOOTER FULLY CHARGED & NOT BROKEN.", () => {
    scooter.rent(user);

    // check station is null.
    // check user property is assigned to user object.
    expect(scooter.station).toBe(null);
    expect(scooter.user).toBe(user);
  })

 // rent method if cant rent scooter when low on charge.
  test("CAN'T RENT, CHARGE LOW!", () => {
    scooter.charge = 18;

    expect(() => {
      scooter.rent(user);
    }).toThrowError("Scooter needs charge.");
  })

  // rent method if cant rent scooter when broken.
  test("CANT RENT, SCOOTER BROKEN!", () => {
    scooter.isBroken = true;

    expect(() => {
      scooter.rent(user);
    }).toThrowError("Scooter needs repair.");
  })

//dock method.
test("DOCK SCOOTER AT A STATION.", () => {
  scooter.rent(user);
  scooter.dock("Station 2");

  expect(scooter.user).toBe(null);
  expect(scooter.station).toBe("Station 2");
})

// recharge method.
test("recharge scooter", async () => {
  scooter.charge = 50;
  scooter.recharge();

  setTimeout(() => {
      expect(scooter.charge).toBe(100);
  }, 5000);
});

// request repair method.
test("repair scooter", () => {
  scooter.requestRepair();

  setTimeout(() => {
    expect(scooter.isBroken).toBe(false);
  }, 5000);
})


})