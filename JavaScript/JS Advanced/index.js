// // Day 24
// // FUNCTIONS ARE OBJECTS
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const another = new Circle(1);

// // DAY 25
// // PROTOTYPES
// // Every object (except the root object) has a prototype (parent).
// // To get the prototype of an object:
// Object.getPrototypeOf(obj);

// // In Chrome, you can inspect "__proto__" property. But you should
// // not use that in the code.

// // To get the attributes of a property:
// Object.getOwnPropertyDescriptor(obj, 'propertyName');

// // To set the attributes for a property:
// Object.defineProperty(obj, 'propertyName', {
//     configurable: false,    // cannot be deleted
//     writable: false,
//     enumerable: false
// });

// // Constructors have a "prototype" property. It returns the object
// // that will be used as the prototype for objects created by the constructor.
// Object.prototype === Object.getPrototypeOf({})
// Array.prototype === Object.getPrototypeOf([])

// // All objects created with the same constructor will have the same prototype.
// // A single instance of this prototype will be stored in the memory.
// const x = {};
// const y = {};
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true

// // Any changes to the prototype will be immediately visible to all objects
// // referencing this prototype.

// // When dealing with large number of objects, it's better to put their
// // methods on their prototype. This way, a single instance of the methods
// // will be in the memory.
// Circle.prototype.draw = function() {}

// // To get the own/instance properties:
// Object.keys(obj);

// // To get all the properties (own + prototype):
// for (let key in obj) {}

// // OBJECTS
// // The simplest way to create an object is using an object literal
// const circle = {
//   radius: 1,
//   draw: function() {}
// };

// // To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor.

// // Factory function
// function createCircle(radius) {
//   return {
//      radius,
//      draw: function() {}
//   }
// }

// // Constructor function
// function Circle(radius) {
//    this.radius = radius;
//    this.draw = function() {}
// }

// // Every object has a "constructor" property which returns the function that was used to construct or create that object.
// const x = {};
// x.constructor; // returns Object()

// // In JavaScript, functions are objects. They have properties and methods.
// Circle.name;
// Circle.length;
// Circle.constructor; // returns Function()
// Circle.call({}, 1); // to call the Circle function
// Circle.apply({}, [1]);

// // Value types are copied by their value, reference types are copied by their reference.
// // Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// // Reference types are: Object, Function and Array

// // JavaScript objects are dynamic. You can add/remove properties:
// circle.location = {};
// circle['location'] = {};

// delete circle.location;

// // To enumerate the members in an object:
// for (let key in circle) console.log(key, circle[key]);

// Object.keys(circle);

// // To see if an object has a given property
// if ('location' in circle)

// // Abstraction means hiding the complexity/details and showing only the essentials.
// // We can hide the details by using private members. Replace "this" with "let".

// function Circle(radius) {
//   // Public member
//   this.radius = radius;

//   // Private member
//   let defaultLocation = {};
// }

// // To define a getter/setter, use Object.defineProperty():

// Object.defineProperty(this, 'defaultLocation', {
//    get: function() { return defaultLocation; },
//    set: function(value) { defaultLocation = value; }
// });

// // DAY 26
// // INHERITANCE
// function Shape() {}
// function Circle() {}

// // Prototypical inheritance
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// function Rectangle(color) {
//   // To call the super constructor
//   Shape.call(this, color);
// }

// // Method overriding
// Shape.prototype.draw = function () {};
// Circle.prototype.draw = function () {
//   // Call the base implementation
//   Shape.prototype.draw.call(this);

//   // Do additional stuff here
// };

// // Don't create large inheritance hierarchies.
// // One level of inheritance is fine.

// // Use mixins to combine multiple objects
// // and implement composition in JavaScript.
// const canEat = {
//   eat: function () {},
// };

// const canWalk = {
//   walk: function () {},
// };

// function mixin(target, ...sources) {
//   // Copies all the properties from all the source objects
//   // to the target object.
//   Object.assign(target, ...sources);
// }

// function Person() {}

// mixin(Person.prototype, canEat, canWalk);

// // DAY 28
// // PRIVATE MEMBERS USING SYMBOLS
// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {}
// }

// const c = new Circle(1);
// const key = Object.getOwnPropertySymbols(c)[0];
// console.log(c[key]);

// // PRIVATE PROPERTIES USING WEAKMAPS
// const _radius = new WeakMap();
// const _move = new WeakMap();
// const privateProps = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);

//     _move.set(this, () => {
//       console.log("move", this);
//     });
//   }

//   draw() {
//     _move.get(this)();
//     console.log("draw");
//   }
// }
// const c = new Circle(1);

// // GETTERS AND SETTERS
// const _radius = new WeakMap();
// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(value) {
//     if (value <= 0) throw new Error("invalid radius");
//     _radius.set(this, value);
//   }
// }
// const c = new Circle(1);

// // INHERITANCE
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }

//   move() {
//     console.log("move");
//   }
// }

// class Circle extends Shape {
//   constructor(color, radius) {
//     super(color);
//     this.radius = radius;
//   }

//   draw() {
//     console.log("draw");
//   }
// }
// const c = new Circle("red", 1);

// // METHOD OVERRIDING
// class Shape {
//   move() {
//     console.log("move");
//   }
// }

// class Circle extends Shape {
//   move() {
//     super.move();
//     console.log("circle move");
//   }
// }
// const c = new Circle();

// CLASSES
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     // These methods will be added to the prototype.
//     draw() {
//     }

//     // This will be available on the Circle class (Circle.parse())
//     static parse(str) {
//     }
// }

// // Using symbols to implement private properties and methods
// const _size = Symbol();
// const _draw = Symbol();

// class Square {
//     constructor(size) {
//         // "Kind of" private property
//         this[_size] = size;
//     }

//     // "Kind of" private method
//     [_draw]() {
//     }

//     // By "kind of" I mean: these properties and methods are essentally
//     // part of the object and are accessible from the outside. But accessing
//     // them is hard and awkward.
// }

// // using WeakMaps to implement private properties and methods
// const _width = new WeakMap();

// class Rectangle {
//     constructor(width) {
//         _width.set(this, width);
//     }

//     draw() {
//         console.log('Rectangle with width' + _width.get(this));
//     }
// }

// // WeakMaps give us better protection than symbols. There is no way
// // to access private members implemented using WeakMaps from the
// // outside of an object.

// // Inheritance
// class Triangle extends Shape {
//     constructor(color) {
//         // To call the base constructor
//         super(color);
//     }

//     draw() {
//         // Call the base method
//         super.draw();

//         // Do some other stuff here
//     }
// }

// // CLASSES EXERCISE. ITEMS IN A STACK
// const _items = new WeakMap();
// class Stack {
//   constructor() {
//     _items.set(this, []);
//   }

//   push(obj) {
//     _items.get(this).push(obj);
//   }

//   pop() {
//     const items = _items.get(this);

//     if (items.length === 0) throw new Error("Stack is empty!");

//     return _items.get(this).pop();
//   }

//   peek() {
//     const items = _items.get(this);

//     if (items.length === 0) throw new Error("Stack is empty!");

//     return items[items.length - 1];
//   }

//   get count() {
//     return _items.get(this).length;
//   }
// }

// // DAY 29
// // MODULES

// // const Circle = require("./circle");

// import { Circle } from "./circle.js";

// const c = new Circle(10);
// // console.log(_radius.get(c));
// c.draw();
