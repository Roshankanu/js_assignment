// 2. **Template Literals:**
//     - **Question:** Write a program that takes a user's first name and last name as inputs and prints a greeting message using template literals. For example, if the input is `John` and `Doe`, the output should be `Hello, John Doe!`.
//     - **Hint:** Use backticks (`) to create the template literal and` ${}` to embed expressions.

let fname=prompt("Enter your first name:");
let lname=prompt("Enter your last name:");

let greeting=`Hello!!, ${fname} ${lname}`;
console.log(greeting);