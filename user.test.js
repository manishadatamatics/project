const userService = require('./user');

describe('user service', () => {
  test('does nothing if separation is already correct', () => {
    const { fName, mNames, lName, dob } = userService.sanitizeNames(
      'John',
      'kumar raja',
      'sing',
      '12-9-2001'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('kumar raja');
    expect(lName).toEqual('sing');
    expect(dob).toEqual('12-9-2001');
  });

  test('correct separation of firstName if it contains spaces', () => {
    const { fName, mNames, lName, dob} = userService.sanitizeNames(
      'John kumar',
      'raja',
      'sing',
      '12-9-2001'
    );

    expect(fName).toEqual('John');
    expect(mNames).toEqual('kumar raja');
    expect(lName).toEqual('sing');
    expect(dob).toEqual('12-9-2001');
  });
});