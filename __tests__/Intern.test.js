const Intern = require('../lib/Intern.js');

test("gets intern's information", () => {
    const intern = new Intern ('');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
    expect(intern.getRole()).toEqual("Intern");
})