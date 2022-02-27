const Manager = require('../lib/Manager.js');

test("gets managers's information", () => {
    const manager = new Manager ('');

    expect(manager.getRole()).toEqual('Manager');
})