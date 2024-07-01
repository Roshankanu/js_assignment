//  **Array Destructuring:**
//     - **Question:** Create an array `colors` containing the elements `"red"`, `"green"`, and `"blue"`. Use array destructuring to assign the first two elements to variables `firstColor` and `secondColor`, and print these variables.
//     - **Hint:** Use the syntax `const [firstColor, secondColor] = colors`.


const colors = ["red", "green", "blue"];  //define color elements


const [firstColor, secondColor] = colors;       //array destruction to assign value


console.log(`First color: ${firstColor}`);
console.log(`Second color: ${secondColor}`);