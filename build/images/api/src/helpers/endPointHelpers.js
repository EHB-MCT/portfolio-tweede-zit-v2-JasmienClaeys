// Existing checkUserName function
function checkUserName(name) {
    if (
      name == null ||
      name.length <= 1 ||
      typeof name !== "string" ||
      name.length > 20 ||
      !/^[A-Z][a-z]+$/.test(name)
    ) {
      return false;
    }
    return true;
  }
  
  // New function to check if the email is valid
  function isValidEmail(email) {
    if (typeof email !== 'string' || !email.includes('@') || email.length > 255) {
      return false;
    }
    return true;
  }
  
  module.exports = { checkUserName, isValidEmail };
