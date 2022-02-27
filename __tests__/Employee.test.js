const Employee = require('../lib/Employee.js');

test('check to see if employee object is created', () => {
    const employee = new Employee("Bob", "1", "bob@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

test('get employee name', () => {
    const employee = new Employee("Bob", "1", "bob@gmail.com");

    expect(employee.getName()).toEqual("Bob");
})

test('get employee id', () => {
    const employee = new Employee("Bob", "1", "bob@gmail.com");

    expect(employee.getId()).toEqual("1");
})

test('get employee email', () => {
    const employee = new Employee("Bob", "1", "bob@gmail.com");

    expect(employee.getEmail()).toEqual("bob@gmail.com");
})

test('get employee role', () => {
    const employee = new Employee("Bob", "1", "bob@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
})