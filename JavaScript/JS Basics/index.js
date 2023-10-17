// JAVASCRIPT NOTES

// ONE
// let name = 'Patrick';
// console.log(name);
// let firstName = 'Patrick';
// let lastName = 'Ndungu';
// console.log (firstName, lastName);
// const interestRate = 0.3;
// console.log (interestRate);

// TWO
// // Types of Primitives
// let name = 'Patrick'; // String literal
// let age = 28; // Number literal
// let isApproved = true; // Boolean literal
// let firstName = undefined; //Undefined literal
// let lastName = null; // null literal

// // THREE
// let person = {
//   name: 'Patrick',
//   age: 28
// };

// // Dot Notation
// person.name = 'Patricia';

// // Bracket Notation
// let selection = 'name';
// person[selection] = 'Jecinta';
// console.log(person.name);

// // FOUR
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 2;
// console.log(selectedColors.length);

// // FIVE
// //Performing a task
// function greet(name, lastName) {
//   console.log('Hello ' + name + ' ' + lastName);
// }

// // Calculating a value
// function square(number) {
//   return number * number;
// }

// console.log(square(2));

// // SIX
// // OPERATORS
// // 1. Arithmetic Operators
// let x = 10;
// let y = 3;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// // console.log(x / y);
// // console.log(x % y);
// // console.log(x ** y); // Exponeation. To the power of.

// // // Increment (++)
// // console.log(x++);
// // console.log(x);

// // Decrement
// console.log(--x);

// // SEVEN
// // 2. Assignment Operators
// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;

// // 3. Comparison Operators
// let x = 1;

// // Relational Operators
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// // // 4. Equality Operators
// // console.log(x === 1);
// // console.log(x !== 1);

// // Equality Operators (Same Type & Value)
// console.log(1 === 1);
// console.log('1' === 1);

// // Lose Equality (value)
// console.log(1 == 1);
// console.log('1' == 1);
// console.log(true == 1);

// 5. Ternary Operator
// If a customer has more than 100 points.
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);

// let age = 38;
// let person = age < 30 ? 'youth' : 'elder';
// console.log(person);

// // // // 6. Logical Operators
// // // // Logical AND (&&)
// // // // Returns TRUE if both operands are TRUE
// // // console.log(true && true);

// // let highIncome = true;
// // let goodCreditScore = true;
// // let eligibleForLoan = highIncome && goodCreditScore;

// // console.log(eligibleForLoan);

// // // Logical OR (||)
// // // Returns TRUE if both operands are TRUE
// // console.log(true && true);

// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible', eligibleForLoan);

// // NOT (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// // // Exercise: Swapping
// // let a = 'red';
// // let b = 'blue';

// // let c = a;
// // a = b;
// // b = c;

// // console.log(a);
// // console.log(b);

// let a = 'red';
// let b = 'blue';

// // Swapping values using a temporary variable
// let temp = a;
// a = b;
// b = temp;

// console.log("After swapping:");
// console.log("a =", a); // Should now be blue
// console.log("b =", b); // Should now be red

// let a = 'red';
// let b = 'blue';
// [a, b] = [b, a]

// console.log(a);
// console.log(b);

// // If...else
// // Hour
// // If hour is between 6am and 12pm: Good morning!
// // If it is between 12pm and 6pm: Good afternoon!
// // Else: Good evening

// let hour = 10;
// if (hour >= 6 && hour < 12)
//   console.log('Good Morning!');
// else if (hour >= 12 && hour < 18)
//   console.log('Good Afternoon!');
// else
//   console.log('Good Evening!');

// LOOPS
// 1. For Loops
// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

// // 2. While Loops
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// // 3. Do ... While Loops
// let i = 9;
// do {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// } while (i <= 5);

// // 4. Infinite Loops
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// while (true) {

// }

// 5. For ... In Loops
// const person = {
//   name: 'Patrick',
//   age: 28
// };

// for (let key in person)
//   console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];
// for (let index in colors)
//   console.log(index, colors[index]);

// // 6. For ... Of Loops
// const colors = ['red', 'green', 'blue'];
// for (let color of colors)
//   console.log(color);

// // // 7. Break and Continue
// let i = 0;
// while (i <= 10) {
//   // if (i === 5) break;
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }

//   console.log(i);
//   i++;
// }

// // // Exercises
// // // Exercise 1: Max of Two Numbers
// let x = 12;
// let y = 11;

// if (x > y) {
//   console.log("The maximum is", x);
// }
// else console.log("The maximum is", y);

// // Solution
// let number = max(5, 10);
// console.log("The maximum number is", number);

// function max(a, b) {
//   return (a > b) ? a : b;
// }

// // Exercise 2: Factory and Constructor Functions
// console.log(isLandscape(300, 600))

// function isLandscape(width, height) {
//   return (width > height);
// }

// // Exercise 3: FizzBuzz
// // Divisible by 3 => Fizz
// // Divisible by 5 => Buzz
// // Divisible by both 3 and 5 => FizzBuzz
// // Not divisible by 3 or 5 => input
// // Not a number => 'Not a number'

// const output = fizzBuzz('hyt');
// console.log(output);

// function fizzBuzz(input) {
//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (typeof input !== 'number')
//     return NaN;

//   if (input % 3 === 0)
//     return 'Fizz';

//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;
// }

// Exercise 4: Demerit Points
// Speed Limit = 70
// 5 speeds above speed limit = 1 point
// Math.floor(1.3)
// More than 12 points, license is suspended

// checkSpeed(130);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log('Ok');
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12)
//     console.log('License Suspended');
//   else
//     console.log('Points', points);
// }

// // Exercise 5: Even and Odd Numbers
// showNumbers(10);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//     console.log(i, message);
//   }
// }

// // Exercise 6: Count Truthy
// // Falsy
// // 1. Undefined
// // 2. null
// // 3. ''
// // 4. false
// // 0
// // Nan
// // Truthy is anything that is not falsy, hence, a true value
// const array = [0, null, undefined, '', 2, 3, 4];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++;
//   return count;
// }

// // DAY 14
// // Exercise 7: String Properties
// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (property in movie)
//     if (typeof obj[property] === 'string')
//       console.log(property + ':', obj[property]);
// }

// // SOLUTION
// const movie = {
//   title: 'a',
//   releaseYear: 2018,
//   rating: 4.5,
//   director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'string')
//       console.log(key, obj[key]);
//   }
// }

// Exercise 8: Sum of Multiples of 3 and 5 for limit 10
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// // SOLUTION
// console.log(sum(10))

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++)
//     if (i % 3 === 0 || i % 5 === 0)
//       sum += i

//   return sum;
// }

// Exercise 9: Grade

// Exercise 10: Stars

// // Exercise: Prime Numbers

// function isPrime(number) {
//   if (number <= 1) return false;
//   if (number <= 3) return true;

//   if (number % 2 === 0 || number % 3 === 0) return false;

//   for (let i = 5; i * i <= number; i += 6) {
//     if (number % i === 0 || number % (i + 2) === 0) return false;
//   }

//   return true;
// }

// function displayPrimesInRange(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//     }
//   }
// }
// displayPrimesInRange(1, 100);

// // OBJECTS
// // Objected Oriented Programming [OOP]
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function () {
//     console.log('draw');
//   }
// };

// circle.draw(); // Draw Method

// // Factory Function
// function createCircle() {
//   return {
//     radius: 1,
//     color: 'yellow',
//     draw() {
//       console.log('draw');
//     }
//   };
// }

// const Circle = createCircle();
// console.log(Circle);

// const circle2 = createCircle(2);
// console.log(circle2);

// // Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   }
// }

// const circle = new Circle(1);

// // Dynamic Nature of Objects
// const circle = {
//   radius: 1
// };

// // Adding Properties
// circle.color = 'yellow';
// circle.draw = function () { }

// // Delete Objects Properties
// delete circle.color;
// delete circle.draw;

// console.log(circle);

// Types [Value/Primitive and Reference/Objects Types]
// Value Types/Primitive are copied by their value
// Reference Types/Objects are copied by their reference
// Value Types: Number, String, Boolean, Symbol, Undefined, Null
// Reference Types: Object, Function, Array
// All functions in JS are objects

// // Enemurating Properties of an Object
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// for (let key in circle)
//   console.log(key, circle[key]);

// for (let key of Object.keys(circle))
//   console.log(key);

// for (let entry of Object.entries(circle))
//   console.log(entry);

// if ('radius' in circle) console.log('yes');

// // CLONING AN OBJECT
// const circle = {
//   radius: 1,
//   draw() {
//     console.log('draw');
//   }
// };

// // const another = {};
// // for (let key in circle)
// // another[key] = circle[key];

// // const another = Object.assign({
// //   color: 'yellow'
// // }, circle);

// const another = Object.assign({}, circle);

// const another = { ...circle };

// console.log(another);

//  //  TEMPORAL LITERALS
// const message =
//   'This is my\n' +
//   '\'first\' message';

// const another =
//   `This is my
//   first message`;

// // DATE
// const now = new Date();
// const date1 = new Date('May 11 2018 09:00');
// const date2 = new Date(2018, 4, 11, 9, 0);

// now.setFullYear(2017)

// // EXERCISES
// const post = {
//   title: 'This is the Title',
//   body: 'The title is a reference to what is at the top',
//   author: 'Patrick',
//   views: `20,000`,
//   comments: {
//     author1: {
//       author: 'Commentor1',
//       body: "This is my comment"
//     },
//     author2: {
//       author: 'Him',
//       body: 'This is the body'
//     }
//   },
//   isLive: true
// }
// console.log(post);

// // DAY 16
// // ARRAYS
// const numbers = [3, 4];

// // Adding Elements
// //End
// numbers.push(1, 6);

// // Beginning
// numbers.unshift(5,2)

// // Middle
// numbers.splice(2, 0, 'a', 'b');

// console.log(numbers);

// // Finding Elements (Primitives)
// const numbers = [1, 2, 3, 1, 4];

// console.log(numbers.indexOf('a'));
// console.log(numbers.indexOf(1, 2));
// console.log(numbers.lastIndexOf(1));

// console.log(numbers.indexOf(1) !== -1);
// console.log(numbers.includes(1));

// // Finding Elements (Reference Types)
// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' },
// ];

// const course = courses.findIndex(function (course) {
//   return course.name === 'a';
// });

// console.log(course);

// // Arrow Functions
// const courses = [
//   { id: 1, name: 'a' },
//   { id: 2, name: 'b' },
// ];

// const course = courses.find(course => course.name === 'a');

// console.log(course);

// // Removing Elements
// const numbers = [1, 2, 3, 4];

// // End
// // Const last = numbers.pop();

// // Beginning
// // const first = numbers.shift();

// // Middle
// numbers.splice(2, 2);
// console.log(numbers);

// // Emptying an array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // Solution 1
// // numbers = [];

// // Solution 2
// // numbers.length = 0;

// // Solution 3
// // numbers.splice(0, numbers.length);

// // Solution 4
// while (numbers.length > 0)
//   numbers.pop();

// console.log(numbers);
// console.log(another);

// // Combining and Slicing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// const slice = combined.slice(2, 4);

// console.log(combined);
// console.log(slice);

// // The Spread Separator
// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// const combined = [...first, 'a', ...second, 'b'];

// // const copy = combined.slice();
// const copy = [...combined];
// console.log(combined);
// console.log(copy);

// // DAY 19
// // ARRAYS CONTINUING
// // ITERATING AN ARRAY
// const numbers = [1, 2, 3];

// // METHOD 1: FOR ... OF LOOP
// for (let number of numbers) console.log(number);

// // METHOD 2: FOREACH METHOD
// numbers.forEach((number) => console.log(number));

// // JOINING ARRAYS
// const numbers = [1, 2, 3];

// // JOINED METHOD
// const joined = numbers.join(",");
// console.log(joined);

// // SPLIT METHOD
// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

// // DAY 20
// // SORTING ARRAYS
// // SORTING. ASCENDING
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// // REVERSE. DESCENDING
// numbers.reverse();
// console.log(numbers);

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "javaScript" },
// ];

// courses.sort(function (a, b) {
//   // a < b => -1
//   // a > b => 1
//   // a === b => 0

//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();

//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });

// console.log(courses);

// // TESTING THE ELEMENTS OF AN ARRAY
// const numbers = [1, 2, 3];

// const allPositive = numbers.every(function (value) {
//   return value >= 0;
// });

// console.log(allPositive);

// const numbers = [1, -1, 2, 3];

// const atLeastOnePositive = numbers.some(function (value) {
//   return value >= 0;
// });

// console.log(atLeastOnePositive);

// // FILTERING AN ARRAY
// const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((n) => n >= 0);

// console.log(filtered);

// // DAY 21
// // EXERCISES
// // Exercise 1: ARRAY FROM RANGE
// const numbers = arrayFromRange(-8, -3);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) output.push(i);
//   return output;
// }

// // Exercise 2. INCLUDES
// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 1));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }

// // DAY 22
// // FUNCTIONS
// // Function Declaration
// function walk() {
//   console.log("walk");
// }

// // Anonymous Function Expression
// let run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();

// HOISTIMG
// The automatic movement of functions to the top of the code

// // ARGUMENTS
// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// // THE REST OPERATOR
// function sum(discount, ...prices) {
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));

// // DEFAULT PAREMETERS
// function interest(principal, rate = 3.5, years = 5) {
//   return ((principal * rate) / 100) * years;
// }

// console.log(interest(10000, undefined, 5));

// // EXERCISE 3
// // EXCEPT
// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1, 2]);

// console.log(output);

// function except(array, excluded) {
//   // return array.filter((item) => !excluded.includes(item));
//   const output = [];
//   for (let element of array)
//     if (excluded.includes(element)) output.push(element);
//   return output;
// }

// // EXERCISE 4: MOVING AN ELEMENT
// const numbers = [1, 2, 3, 4];
// const output = move(numbers, 1, 2);
// console.log(output);
// function move(array, index, offset) {
//   const position = index + offset;
//   if (position >= array.length) {
//     console.error("Invalid Offset.");
//     return;
//   }
//   const output = [...array];
//   const element = output.splice(index, 1)[0];
//   output.splice(position, 0, element);
//   return output;
// }

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurences(numbers, 1);

// console.log(count);

// function countOccurences(array, searchElement) {
//   // let count = 0;
//   // for (element of array) if (element === searchElement) count++;
//   // return count;

//   return array.reduce((accumulator, current) => {
//     const occurence = current === searchElement ? 1 : 0;
//     console.log(accumulator, current, searchElement);
//     return accumulator + occurence;
//   }, 0);
// }

// // DAY 23
// // GETTERS AND SETTERS
// const person = {
//   firstName: "Mosh",
//   lastName: "Hamedani",
//   get fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "John Smith";

// console.log(person);

// console.log(sum[(1, 2, 3, 4, 5)]);
