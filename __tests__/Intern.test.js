const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern("");

    expect(intern.name).toEqual(expect.any(String));
})

test("gets intern's information", () => {
    const intern = new Intern ("");

    expect(intern.internInfo()).toHaveProperty('id');
    expect(intern.internInfo()).toHaveProperty('email');
    expect(intern.internInfo()).toHaveProperty('school');
})