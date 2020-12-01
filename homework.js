//Write a JavaScript function that accept two integers and display the larger.
var x = 5;
var y = 6;
function greater(x,y){

    if(x>y) {
        console.log(x);
    }
    else if (x<y) {
        console.log(y);
    }
}
//Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
}        

//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result

if (a > b && a > c && a > d && a > f) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > f) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > f) {
    console.log(c);
}
else if (d > a && d > c && d > b && d > f) {
    console.log(d);
}
else {
    console.log(f);
}

//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");
    }
    else {
        console.log(x + " is odd");
    }
}
//Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz".
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log(i + " Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i + " Buzz");
    }
    else {
        console.log(i);
    }
}
//Write a function to count how many numbers between 1 and 1000 are divisible by 3 with no remainder.
function divisibleBy() {
    var numberOfInstances = 0;
    for (var i = 1; i< 1001; i++) {
        if (i % 3 === 0) {
            numberOfInstances++
        }
    }
    console.log(numberOfInstances);
}

//Write a function that creates the following output on the console:
function pyramidBuilder() {
    for (var i = 1; i < 6; i++) {
        var local = "";
        for (var y = 5; y > i; y--) {
            local = local.concat(" ");
        }
        for (let j = 1; j <= i; j++) {
            local = local.concat(j)
        }
        for (var k = i -1; k > 0; k--) {
            local = local.concat(k)
        }
        console.log(local)
    }
}

//Write a function that creates the following output on the console:
function diamond() {
    for (var i = 1; i < 6; i++) {
        var local = "";
        for (var y = 5; y > i; y--) {
            local = local.concat(" ");
        }
        for (let j = 1; j <= i; j++) {
            local = local.concat(j)
        } 
        for (var k = i - 1; k > 0; k--) {
            local = local.concat(k)
        }
        console.log(local)
    }
    for (var i = 4; i > 0; i--) {
        var local = "";
        for (var y = 5; y > i; y--) {
            local = local.concat(" ");
        }
        for (let j = 1; j <= i; j++) {
            local = local.concat(j)
        }
        for (var k = i-1; k >0; k--) {
            local = local.concat(k)
        }
        console.loh(local)
    }
}
