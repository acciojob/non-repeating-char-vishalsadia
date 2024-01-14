function firstNonRepeatedChar(str) {
 // Write your code here
	// Create an object to store the count of each character in the string
    const charCount = {};

    // Traverse the string and update the character count in the object
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Traverse the string again to find the first non-repeated character
    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
