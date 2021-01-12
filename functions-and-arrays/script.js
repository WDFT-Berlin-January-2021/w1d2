// console.log('hey');
// function greet() {
//     console.log('hey');
// }

// // greet()

// function capitalize(string) {
//     // const capitalizedString = string.toUpperCase();
//     // return capitalizedString;
//     return string.toUpperCase();
//     // lines after the return cannot be executed
// }
// const input = 'anna'
// const capitalized = capitalize(input);
// console.log(capitalized);

// function greeting(name, greeting) {
//     console.log(greeting + ' ' + capitalize(name) + '!')
// }

// greeting('kevin', 'hi')

// function declaration - this gets hoisted
function sum(a, b) {
    // const sum = a + b;
    // return sum;
    return a + b;
}
// function expression - get's not hoisted
// const sum = function (a, b) {
//     return a + b;
// }

// console.log(sum(2, 4));
// Arrays

// const numbers = [2, 4, 'a', true];
// console.table(numbers);
// const ar = Array(10).fill('hans');
// // ar.fill(1);
// console.log(ar);
// const empty = [];
// empty[0] = 'a';
// empty[2] = 'a'
// console.log(empty[0]);

// multidimensional arrays
// const multidimensional = [['a', 'b'], ['x', 'y']];

// console.log(multidimensional[0][1]);

const names = [];
// adds elements to the end
// names.push('anna');
// console.log(names);
// names.push('felix');
// console.log(names);

// removes elements from the end and returns it
// const lastElement = names.pop();
// console.log(names);
// console.log(lastElement);

// adds elements to the beginning
// names.unshift('kevin');
// console.log(names);
// removes from the beginning
// names.shift();
// console.log(names);

const countries = ['usa', 'france', 'poland'];
// splice
// countries.splice(1, 1, 'england');
// console.log(countries);

const numbers = [1, 2, 3, 4, 5, 6, 7];

// iterating over an array
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// iterate over countries with for of loop
// for (let <nameOfOneOfTheElements> of <NameOfTheArray>) {}
// for (let country of countries) {
//     console.log(country);
// }

// for in gets the index
// for (let index in countries) {
//     console.log(index);
// }

// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// iterate over countries with forEach
// function logCountry(country) {
//     console.log(country);
// }
// countries.forEach(function (country) {
//     console.log(country);
// });

function findFrance(countries) {
    for (let i = 0; i < countries.length; i++) {
        if (countries[i] === 'france') {
            return i;
        }
    }
}
// console.log(countries);
// console.log(findFrance(countries))

// it's usually better to create a new array instead of 
// changing the input array 
function filterEven(ar) {
    let result = [];
    for (let i = 0; i < ar.length; i++) {
        // check every element
        // if it's even add it to result
        if (ar[i] % 2 === 0) {
            result.push(ar[i])
        }
    }
    return result
}
console.log(filterEven(numbers));