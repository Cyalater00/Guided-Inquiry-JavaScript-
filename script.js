// VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”
const var1 = 6;
const var2 = 2;
let differnce = var1 - var2;
console.log(`The differnce between ${var1} and ${var2} is ${differnce}`);
console.log (var1 - var2);


// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”
const name1 ="Thomas";
const name2 ="John";
console.log(name1.length);
console.log(name2.length);
const lengthdifference = name1.length - name2.length;


//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


let userText = prompt("Write a text");

if(userText === userText.toUpperCase()){
    alert("SHOUTING");
}
     else if (userText === userText.toLowerCase()){
        alert("whisper");
    } else{
        alert("neither");
    }


// HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// function add
function add(p1, p2) {
    return p1 + p2;
  }

function sub(p1, p2) {
    return p1 - p2;
  }
function div(p1, p2) {
    return p1 / p2;
  }
  
function mul(p1, p2) {
    return p1 * p2;
  }

  console.log(add(3,4));
  console.log(sub(3,4));
  console.log(div(3,4));
  console.log(mul(3,4));


//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

//promt user for operation
//promt user for numbers
// store them in variables
//use functions on those numbers

let x = Number(prompt("enter a number"));
let y = prompt("+, -, /,*");
let u = Number(prompt("enter another number"));
let answer = 0;

if (y === "+"){
    answer = add(x,u);

    alert(answer);

} else if(y === "-"){
    answer = sub(x,u);

    alert(answer);
} else if(y === "/"){
    answer = div(x,u);

    alert(answer);

} else if(y === "*"){
    answer = mul(x,u);

    alert(answer);

}
