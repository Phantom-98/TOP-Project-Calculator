const calc = function(num1, num2, operator){
if(operator == '+'){
    return num1 + num2;
}
else if(operator == '-'){
    return num1 - num2;
}
else if(operator == '*'){
    return num1 * num2;
}
else if(operator == '/'){
    return num1 / num2;
}

}

let firstNum = prompt("Input first number here: ");
console.log(firstNum);

let oprnd = prompt("Input the math operator symbol here, optyions are + , - , * , and /. ");
console.log(oprnd);

let secondNum = prompt("Input second number here: ");
console.log(secondNum); 
 
let num1 = parseFloat(firstNum);
let num2 = parseFloat(secondNum);
let operator = oprnd;

let result = calc(num1, num2, operator);
console.log(result);


 
 
 
