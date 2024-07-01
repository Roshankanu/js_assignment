//  . **Object Destructuring:**
//     - **Question:** Define an object `person` with properties `name`, `age`, and `city`. Use object destructuring to extract these properties into individual variables and print them.
//     - **Hint:** Use the syntax `const { name, age, city } = person`.


const person={
    fulName:"Roshan Kumar Kanu",
    age:20,
    city:"Birgunj",
}
const { fulName, age, city} = person; //object destruct to extract properties 


console.log(`Name: ${fulName}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);

console.log(person);    //access whole object

console.log(person.fulName);
console.log(person.age);            //access member function
console.log(person.city);