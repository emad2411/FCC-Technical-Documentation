let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];


my.splice(++counter, 2);
my.reverse();

console.log(my); //["Osama","Elham","Mazero","Ahmed"]
console.log(my.slice(++zero, --counter)); //["Elham","Mazero"]
my.pop();
my.shift();
my = my[--zero].substring(zero, --counter).concat(my[++zero].substr(counter));
console.log(my); // "Elzero"
//console.log(); //"rO"