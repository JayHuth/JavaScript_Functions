console.log("Hello World!\n==========\n");

// Exercise 1 Section

function printOdds(count){
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

printOdds(10);
printOdds(100);

console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section

function checkAge(userName, age) {

    let aboveSixteen = `Congrats ${userName}! your old enough to drive!`

    let belowSixteen = `Sorry ${userName}. your not old enoughe to drive yet.`

    if (age < 16) {
        console.log(belowSixteen)
    } else {
        console.log(aboveSixteen)
    }
}

checkAge("Jay", 27);
checkAge("Holly", 2);
checkAge("Mera", 16);

console.log("EXERCISE 2:\n==========\n");



//Excersise 3 Section

function checkQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x == 0 && y != 0) {
        return x;
    } else if (x != 0 && y == 0) {
        return y;
    } else {
        return "Origin";
    }
}

console.log(checkQuadrant(1, 1));
console.log(checkQuadrant(-1, 1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(1, -1));
console.log(checkQuadrant(0, -1));
console.log(checkQuadrant(1, 0));
console.log(checkQuadrant(0, 0));


//Excercise 4 Section

function isTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a 
}

function checkTriangle(a, b, c) {
    let isValid = isTriangle(a, b, c);
    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        } else if (a ==b || b == c || a == c) {
            return `Isosceles`;
        }else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));