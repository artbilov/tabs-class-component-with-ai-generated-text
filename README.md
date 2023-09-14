
| ru | en |
|---|---|
| 1. Вкладки только сверху. | 1. Tabs only on top. |
| 2. На вкладках должно быть только название. | 2. Tabs should have only title. |
| 3. Ширина вкладок ограничена контейнером. | 3. Tabs width should be limited by container. |
| 4. Высота вкладок ограничена контентом. | 4. Tabs height should be limited by content. |
| 5. От 2 до 8 вкладок. | 5. From 2 to 8 tabs. |
| 6. Автоматический выбор цвета фона вкладки. | 6. Automatically choose background color for tabs. |
| 7. Добавление новой вкладки. | 7. Add new tab. |
| 8. Удаление вкладки. | 8. Delete tab. |

# JavaScript Cheat Sheet

## JavaScript Basics

**Variables** - Used to store data values.

```javascript
var x = 5; // Number
let y = 'Hello'; // String
const z = true; // Boolean
```
**Data Types** - JavaScript has different types of data: Number, String, Boolean, Array, Object, null, undefined, and Symbol.

**Operators** - Arithmetic (+, -, *, /, %, ++, --), Assignment (=, +=, -=, *=, /=), Comparison (==, ===, !=, !==, >, <, >=, <=), Logical (&&, ||, !).

**If...Else Statement** - Executes a block of code if a specified condition is true.

```javascript
if (x > 0) {
    console.log('Positive');
} else {
    console.log('Negative');
}
```

**Switch Statement** - Selects one of many code blocks to be executed.

```javascript
switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}
```

**For Loop** - Repeats a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**While Loop** - Loops through code as long as the specified condition is true.

```javascript
while (i < 5) {
    console.log(i);
    i++;
}
```

**Functions** - A block of code designed to perform a specific task.

```javascript
function myFunc(x, y) {
    return x * y;
}
```

## JavaScript Objects

**Creating Objects** - An object is a standalone entity with properties and types.

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};
```

**Accessing Object Properties** - Can be accessed using dot notation or bracket notation.

```javascript
console.log(person.firstName);
console.log(person['lastName']);
```

**Methods** - Methods are actions that can be performed on objects.

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};
```

## JavaScript Arrays

**Creating Arrays** - An array is a special variable that can hold more than one value.

```javascript
let cars = ['Toyota', 'Ford', 'Honda'];
```

**Accessing Array Elements** - Array elements are accessed using their index number.

```javascript
console.log(cars[0]); // Outputs 'Toyota'
```

**Array Methods** - push(), pop(), shift(), unshift(), indexOf(), slice(), splice(), concat(), join(), etc.

```javascript
cars.push('BMW');
```

## JavaScript Events

**Common HTML Events** - onclick, onmouseover, onmouseout, onchange, onload.

```javascript
<button onclick="myFunc()">Click me</button>
```

**Event Listeners** - Can be added to any DOM object and are used to handle events.

```javascript
element.addEventListener('click', myFunc);
```

## JavaScript Error Handling

**Try...Catch Statement** - Lets you test a block of code for errors.

```javascript
try {
    // Code to try
} catch(err) {
    // Code to handle errors
}
```

**Throw Statement** - Creates custom errors.

```javascript
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

## JavaScript Promises and Async/Await

**Promises** - An object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    // Async operation
});
```

**Async/Await** - A way to handle promises.

```javascript
async function myFunc() {
    let value = await promise;
}
```

## JavaScript DOM Manipulation

**Selecting Elements** - getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll().

**Changing Elements** - innerHTML, textContent, value, attribute.

**Adding and Deleting Elements** - createElement(), appendChild(), removeChild(), replaceChild().

**Adding Event Handlers** - addEventListener(), removeEventListener().

## Miscellaneous

**Strict Mode** - Activated by adding "use strict" at the beginning of a script.

**JavaScript JSON** - JavaScript Object Notation is a syntax for storing and exchanging data.

**Arrow Functions** - A shorter syntax for writing function expressions.

```javascript
let myFunc = (x, y) => x * y;
```

**Template Literals** - Allows embedded expressions.

```javascript
let text = `Hello, ${person.firstName}`;
```

**Destructuring Assignment** - Unpack values from arrays, or properties from objects, into distinct variables.

```javascript
let [a, b] = [1, 2];
let {name, age} = {name: 'John', age: 30};
```

This cheat sheet covers the basics of JavaScript, but there's a lot more to learn to become proficient in JavaScript. Happy coding!
