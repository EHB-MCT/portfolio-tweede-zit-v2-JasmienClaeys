const { checkUserName, isValidEmail } = require("../../helpers/endPointHelpers");


// Test for the checkUserName function
describe("checkUserName Function", () => {
  test("should return false for invalid names", () => {
    expect(checkUserName("")).toBe(false);                // Empty string
    expect(checkUserName(null)).toBe(false);              // Null value
    expect(checkUserName("i")).toBe(false);               // Single character
    expect(checkUserName("1")).toBe(false);               // Numeric value
    expect(checkUserName("marie jeanne")).toBe(false);    // Multiple words
    expect(checkUserName("John Doe")).toBe(false);        // Multiple words with space
    expect(checkUserName("A very long name that exceeds the limit")).toBe(false); // Long name
  });

  test("should return true for valid names", () => {
    expect(checkUserName("Bart")).toBe(true);             // Proper name
    expect(checkUserName("Alice")).toBe(true);            // Proper name
  });
});

// Test for the isValidEmail function
describe("isValidEmail Function", () => {
  test("should return false for invalid emails", () => {
    expect(isValidEmail("")).toBe(false);                 // Empty string
    expect(isValidEmail(null)).toBe(false);               // Null value
    expect(isValidEmail("plainaddress")).toBe(false);     // No '@' and domain
    expect(isValidEmail("missingatsign.com")).toBe(false); // Missing '@'
    expect(isValidEmail("user@domain")).toBe(false);       // Missing domain part after '@'
    expect(isValidEmail("user@domain.com".repeat(20))).toBe(false); // Very long email
  });

  test("should return true for valid emails", () => {
    expect(isValidEmail("user@domain.com")).toBe(true);   // Valid email
    expect(isValidEmail("user@domain.co")).toBe(true);    // Valid email with short domain
    expect(isValidEmail("user@sub.domain.com")).toBe(true); // Valid email with subdomain
  });
});
