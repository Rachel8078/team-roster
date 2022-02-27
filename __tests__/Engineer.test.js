const Engineer = require('../lib/Engineer.js');

test("gets engineers's information", () => {
    const engineer = new Engineer ("");

    expect(engineer.getGitHub()).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual('Engineer');
})

const Manager = require('../lib/Manager.js');