// 1. Write your functions here


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"

const katzDeli = ['Ada', 'Grace', 'Kent'];

function line(customersArray) {
    var counter = 1;
    var current = '';

    if (!customersArray[0]) {
        console.log('The line is currently empty');
    } else {
        for (let i = 0; i < customersArray.length; i++) {
            current += `${counter}. ${customersArray[i]} `;
            counter ++;
        }
        return `The line is currently: ` + current;
    }
}

function takeANumber(arr, name) {
    arr.push(name);
    var namePos = arr.indexOf(name);
    console.log(`Welcome, ${name}. You are number ${namePos + 1}`);
}

function nowServing(arr) {
    if (!arr[0]) {
        console.log('There is nobody waiting to be served!');
    } else {
        console.log(`Currently serving ${arr[0]}.`);
    arr.shift();  
    }
} 