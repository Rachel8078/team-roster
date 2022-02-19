const Employee = require('../lib/Employee.js');

test('check to see if employee is manager, intern, or engineer', () => {
    const employee = new Employee(name = '');

    expect(employee.position).toEqual(expect.any(Array));
})

test('check to see if done building team', () => {
    const employee = new Employee(name = '');

    expect(employee.done).toBeTruthy
})

