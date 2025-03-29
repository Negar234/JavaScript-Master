function calculator(number1, number2, operator) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' ) {
        return "Please enter two valid number"
    }
    else if (operator == "+") {
        return number1 + number2
    } else if (operator == "-") {
        return number1 - number2
    } else if (operator == "*") {
        return number1 * number2
    } else if (operator == "/") {
        return number1 / number2
    } else {
        return "Not Valid"
    }
}

const result = calculator("manish", "negar", "+")
console.log(result)


const functionCalculator = (num1, num2, operator)=> {
    if (!num1 || !num2 || !operator ||typeof number1 !== 'number' || typeof number2 !== 'number' ) {
        return "Please provice correct details"
    }

    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;

        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error , it is infinite'
        default:
            return 'Error'
    }
}