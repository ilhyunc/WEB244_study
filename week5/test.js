function checkPassword(password) {
    // Check length
    if (password.length < 8 || password.length > 32) {
      return false;
    }
  
    // Check capital
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
      // Check number
      if (!/\d/.test(password)) {
        return false;
    }
    
      // Check symbol
      if (!/[!@#$%^&*+\-{}]/.test(password)) {
        return false;
    }
    // Valid password
    return true;
  }
  


console.log(checkPassword("Abcdef123!123456789012345678901")); //true
console.log(checkPassword("abcedf1230123456789012345678901")); //false



var student = { id : "2913", name: "Sue", mark1: 10, mark2: 6}; 
console.log(student.name + "has average " + (student["mark1"]+student.mark2)/2);