const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager("");

    expect(manager.name).toEqual(expect.any(String));
})

test("gets managers's information", () => {
    const manager = new Manager ("");

    expect(manager.managerInfo()).toHaveProperty('id');
    expect(manager.managerInfo()).toHaveProperty('email');
    expect(manager.managerInfo()).toHaveProperty('office');
})