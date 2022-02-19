const Engineer = require('../lib/Engineer.js');

test('creates a Engineer object', () => {
    const engineer = new Engineer("");

    expect(engineer.name).toEqual(expect.any(String));
})

test("gets engineers's information", () => {
    const engineer = new Engineer ("");

    expect(engineer.engineerInfo()).toHaveProperty('id');
    expect(engineer.engineerInfo()).toHaveProperty('email');
    expect(engineer.engineerInfo()).toHaveProperty('github');
})