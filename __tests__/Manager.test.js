const Manager = require('../lib/Manager.js');

test("gets managers's information", () => {
    const manager = new Manager ("Bob", "1", "bob@gmail.com", "123");


    expect(manager.getOfficeNumber()).toEqual("123");
    expect(manager.getRole()).toEqual('Manager');
})