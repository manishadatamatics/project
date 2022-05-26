class UserService {
    async register(firstName, middleNames, lastName, dateofbirth) {
      const { fName, mNames, lName, dob } = this.sanitizeNames(
        firstName,
        middleNames,
        lastName,
        dateofbirth
      );
      console.log(`firstName = ${fName}`);
      console.log(`middleNames = ${mNames}`);
      console.log(`lastName = ${lName}`);
      console.log(`lastName = ${dob}`);
  
      return 5;
    }
  
    sanitizeNames(firstName, middleNameStr, lastName,dateofbirth) {
      
      let [sanitizedFirstName, ...mNames] = firstName.trim().split(' ');
      if (middleNameStr) {
        mNames = mNames.concat(middleNameStr.split(' '));
      }
  
      const sanitizedMiddleNames = mNames.filter((n) => n);
      
      const sanitizedMiddleName = sanitizedMiddleNames.length
        ? sanitizedMiddleNames.join(' ')
        : null;
      const sanitizedLastName = lastName.trim();
      const sanitizedDateofbirth = dateofbirth.trim();
      return {
        fName: sanitizedFirstName,
        mNames: sanitizedMiddleName,
        lName: sanitizedLastName,
        dob: sanitizedDateofbirth,
      };
    }
  }
  
  module.exports = new UserService();