// function displayCurrentDateTime() {
//     var now = new Date();
//     console.log(now);
    
// }
// displayCurrentDateTime()

// 2
// function greetUser(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//     console.log(fullName);
    
// }
// greetUser(prompt("enter your first name"),prompt("enter your last name",))

// 3
// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
    
// }
// addTwoNumbers(3,3

// 4
//  function calc(num1,num2,operator){
//     if (operator === `+`){
//         return num1+num2;
//     }else if (operator === `-`){
//         return num1-num2;
//     }else if (operator === `*`){
//         return num1*num2;
//     }else if (operator === `/`){
//         return num1/num2;
//     }else if (operator === `%`){
//         return num1%num2;
//     }else {
//         return "invalid entry"
//     }
//  }
// console.log(calc(+prompt("enter your first number"),+prompt("enter your second number"),prompt("enter your operator")))

// 5
// function square(number) {
//     return number * number;  
// }
// var result = square(5);  
// console.log(result);  

// 6
 // Factorial function
// function factorial(n) {
//     if (n < 0) {
//         return "Invalid input";  
//     }
//     if (n === 0 || n === 1) {
//         return 1;  
//     }
//     return n * factorial(n - 1);  
// }

 
// const userInput = prompt("Enter a number to calculate its factorial:");
// const number = +prompt(userInput);  

 
// const result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);   

// 7
// function count(start, end) {
//     var counting = "";
//     for (let i = start; i <= end; i++) {
//         counting += i + " ";
//     }
//    console.log(counting);
    
// }
// count(+prompt("enter your number"),+prompt("enter last number"));
 
// 8
 

// 9
// function calculateArea(width, height) {
//     // Rectangle ka area calculate karein
//     return width * height;
// }
 
// const areaWithValues = calculateArea(5, 10);
// console.log(`Values se area: ${areaWithValues}`);

// var widthVar = 7;
// var heightVar = 3;
// var areaWithVariables = calculateArea(widthVar, heightVar);
// console.log(`Variables se area: ${areaWithVariables}`);

// 10
// function palindrome(word){
//     var reverse="";
//     for(var i=word.length-1;i>=0;i--){
//         reverse += word[i];
//     }
//         if(reverse===word){
//             console.log("this is palindrome");
            
//         }else{
//             console.log("this is not palindrome");
            
//         }
    

// }
// palindrome(prompt("enter your word"))

// 11
// function capitalizeFirstLetter(str) {
//     var words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
// }

// // Example usage
// var exampleString = 'the quick brown fox';
// var result = capitalizeFirstLetter(exampleString);
// console.log(result); 

// 12
// function findLongestWord(str) {
//     const words = str.split(' '); // Split the string into an array of words
//     let longestWord = ''; // Initialize an empty string to hold the longest word

//     for (let word of words) {
//         // Check if the current word is longer than the longestWord found so far
//         if (word.length > longestWord.length) {
//             longestWord = word; // Update longestWord
//         }
//     }

//     return longestWord; // Return the longest word
// }

// // Example usage
// const exampleString = 'Web Development Tutorial';
// const result = findLongestWord(exampleString);
// console.log(result); // Output: 'Development'

// 13
// function countLetterOccurrences(str, letter) {
//     let count = 0; // Initialize a counter

//     // Convert the string to lowercase to make the search case-insensitive
//     const lowerStr = str.toLowerCase();
//     const lowerLetter = letter.toLowerCase();

//     // Iterate through each character in the string
//     for (let char of lowerStr) {
//         if (char === lowerLetter) {
//             count++; // Increment the counter if the character matches the letter
//         }
//     }

//     return count; // Return the total count
// }

// // Example usage
// const sampleString = 'JSResourceS.com';
// const letterToCount = 'o';
// const result = countLetterOccurrences(sampleString, letterToCount);
// console.log(result); // Output: 1

// 14
// var π = Math.PI; // Using Math.PI for a more accurate value of π

// // Function to calculate the circumference of a circle
// function calcCircumference(radius) {
//     const circumference = 2 * π * radius; // Circumference formula
//     console.log(`The circumference is ${circumference.toFixed(2)}`); // Output the result
// }

// // Function to calculate the area of a circle
// function calcArea(radius) {
//     const area = π * radius * radius; // Area formula
//     console.log(`The area is ${area.toFixed(2)}`); // Output the result
// }

// // Example usage
// const radius = 5; // You can change this value
// calcCircumference(radius);
// calcArea(radius);

// 1
// function power(a, b) {
//     // Calculate a raised to the power of b
//     return b < 0 ? 1 / (a ** -b) : a ** b;
// }

// // Example usage
// console.log(power(2, 3));  // Output: 8
// console.log(power(5, -2)); // Output: 0.04
// console.log(power(3, 0));  // Output: 1

// 2
// function isLeapYear(year) {
//     // A year is a leap year if:
//     // 1. It is divisible by 4
//     // 2. If it is divisible by 100, it must also be divisible by 400

//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; // It's a leap year
//     } else {
//         return false; // Not a leap year
//     }
// }

// // Example usage
// const year = 2024; // You can change this value to test
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// 3
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2; // Calculate the semi-perimeter
// }

// function calculateArea(a, b, c) {
//     const S = calculateSemiPerimeter(a, b, c); // Get the semi-perimeter
//     // Calculate the area using the formula
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area; // Return the area
// }

// // Example usage
// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const area = calculateArea(sideA, sideB, sideC);
// console.log(`The area of the triangle is: ${area.toFixed(2)}`); // Output the area rounded to 2 decimal places

// 4
// function calculateAverage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0); // Sum up the marks
//     return total / marks.length; // Calculate average
// }

// function calculatePercentage(marks) {
//     const total = marks.reduce((sum, mark) => sum + mark, 0); // Sum up the marks
//     return (total / (marks.length * 100)) * 100; // Calculate percentage
// }

// function mainFunction() {
//     const marks = [85, 90, 78]; // Example marks for 3 subjects

//     const average = calculateAverage(marks); // Call the average function
//     const percentage = calculatePercentage(marks); // Call the percentage function

//     // Display the results
//     console.log(`Average Marks: ${average.toFixed(2)}`); // Rounded to 2 decimal places
//     console.log(`Percentage: ${percentage.toFixed(2)}%`); // Rounded to 2 decimal places
// }

// // Call the main function
// mainFunction();

// 5
// function customIndexOf(str, char) {
//     // Check if the character is a single character
//     if (char.length !== 1) {
//         return -1; // Return -1 if not a single character
//     }

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; // Return the index if the character matches
//         }
//     }

//     return -1; // Return -1 if the character is not found
// }

// // Example usage
// const exampleString = 'Hello, world!';
// const characterToFind = 'o';

// const index = customIndexOf(exampleString, characterToFind);
// console.log(`Index of '${characterToFind}': ${index}`); // Output: Index of 'o': 4

// 6
// function countDoubleVowels(text) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     // Convert text to lowercase for case-insensitive comparison
//     text = text.toLowerCase();

//     for (let i = 0; i < text.length - 1; i++) {
//         const currentChar = text[i];
//         const nextChar = text[i + 1];

//         // Check if both characters are vowels
//         if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//             count++;
//         }
//     }

//     return count; // Return the total count of double vowels
// }

// // Example usage
// const exampleText = "The quick brown fox jumps over the lazy dog.";
// const doubleVowelCount = countDoubleVowels(exampleText);
// console.log(`Number of occurrences of double vowels: ${doubleVowelCount}`);

// 8
// function kilometersToMeters(kilometers) {
//     return kilometers * 1000; // 1 km = 1000 m
// }

// function kilometersToFeet(kilometers) {
//     return kilometers * 3280.84; // 1 km = 3280.84 feet
// }

// function kilometersToInches(kilometers) {
//     return kilometers * 39370.1; // 1 km = 39370.1 inches
// }

// function kilometersToCentimeters(kilometers) {
//     return kilometers * 100000; // 1 km = 100000 cm
// }

// function convertDistance(kilometers) {
//     const meters = kilometersToMeters(kilometers);
//     const feet = kilometersToFeet(kilometers);
//     const inches = kilometersToInches(kilometers);
//     const centimeters = kilometersToCentimeters(kilometers);

//     console.log(`${kilometers} kilometers is:`);
//     console.log(`${meters} meters`);
//     console.log(`${feet} feet`);
//     console.log(`${inches} inches`);
//     console.log(`${centimeters} centimeters`);
// }

// // Example usage
// const distanceInKilometers = 5; // Change this value for different distances
// convertDistance(distanceInKilometers);

// 9
// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40; // Regular hours in a week
//     const overtimeRate = 12; // Overtime pay rate per hour
//     let overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
//         overtimePay = overtimeHours * overtimeRate; // Calculate total overtime pay
//     }

//     return overtimePay; // Return the total overtime pay
// }

// // Example usage
// const hoursWorked = 45; // Change this value for different scenarios
// const overtimePay = calculateOvertimePay(hoursWorked);
// console.log(`Overtime pay for ${hoursWorked} hours worked: Rs. ${overtimePay}`);

// 10
// function calculateCurrencyNotes(amount) {
//     // Convert amount to an integer value (since it is in hundreds)
//     const totalAmount = amount * 100;

//     // Initialize count of notes
//     let notes100 = 0;
//     let notes50 = 0;
//     let notes10 = 0;

//     // Calculate number of 100 denomination notes
//     notes100 = Math.floor(totalAmount / 100);
//     const remainderAfter100 = totalAmount % 100;

//     // Calculate number of 50 denomination notes
//     notes50 = Math.floor(remainderAfter100 / 50);
//     const remainderAfter50 = remainderAfter100 % 50;

//     // Calculate number of 10 denomination notes
//     notes10 = Math.floor(remainderAfter50 / 10);

//     // Display the result
//     console.log(`For an amount of Rs. ${totalAmount}:`);
//     console.log(`100 denomination notes: ${notes100}`);
//     console.log(`50 denomination notes: ${notes50}`);
//     console.log(`10 denomination notes: ${notes10}`);
// }

// // Example usage
// const amountToWithdraw = 5; // Change this value for different amounts (in hundreds)
// calculateCurrencyNotes(amountToWithdraw);

// function image(){
//     alert("welcome to the image")
// }
 