/*function add(a,b) {
	return a+b;
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));*/

/*
var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);*/

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

//Hi andrew, you are 25.

//funcion que tome dos argumentos, name y age
//lamarla usando spread operator

function greeter (name, age) {
	console.log('Hello ' + name + ' you are ' + age);
};

greeter(...person);
greeter(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];

final.push(...names);
console.log(final);

final.forEach((name) => {
	console.log('Hi ' + name);
})
