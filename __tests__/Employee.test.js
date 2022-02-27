const Employee = require('../lib/Employee.js');

test('check to see if employee object is created', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

test('get employee name', () => {
    const employee = new Employee();

    expect(employee.getName()).toEqual(expect.any(String));
})

test('get employee id', () => {
    const employee = new Employee();

    expect(employee.getId()).toEqual(expect.any(String));
})

test('get employee email', () => {
    const employee = new Employee();

    expect(employee.getEmail()).toEqual(expect.any(String));
})

test('get employee role', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");
})