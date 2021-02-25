// Default params
function myFunction(param1 = 'default', param2) { ... }

// Concatenación
let hello = 'welcome';
let world = 'to the jungle!';
let guns = `${hello} ${world}` // Welcome to the jungle!

// Let, const, multilínea, spread and destructuration

let variable1; // Block scope
const constant1; // Block scope and constant
const stringmultiline = `this is a multi
line string`;

const array = ['item1', 'item2'];
const array2 = ['item3', 'item4'];
const allArrays = [...array, ...array2] // ['item1', 'item2' , 'item3', 'item4']

const object = {
	name: 'manuel',
	age: 24,
	country: 'PE',
};

const { name, age } = object; // 'manuel', 24

// Arrow functions
const myFunction = (params) => { ... };
const square = num => num * num; // returns num * num

// Parámetros en objetos
const name = 'manuel';
const age = 24,
const object = { name, age }; // { name: 'manuel', age: 24 }

// Promesas
const myPromise = () => new Promise((resolve, reject) => {
	if (success) { // Make some logic to capture when the promise have success
		return resolve(succesfullResponse);
	}
	return reject(failedResponse);
}

myPromise
	.then(response => doSomething)
	.catch(error => doSomethingWithError)

// Clases

class myClass {
	constructor(param1, param2) {
		this.param1 = param1;
		this.param2 = param2;
	}

	sum() {
		return this.param1 + this.param2
	}
}

const calc = new myClass(2, 2);
calc.sum(); // 4

// Generadores
function* myGenerator () {
	yield 'Paradise';
	yield 'city';
}

const generatorHello = myGenerator();
console.log(generatorHello.next());
console.log(generatorHello.next());
console.log(generatorHello.next());

/* { value: 'Paradise ', done: false }
{ value: 'city', done: false }
{ value: undefined, done: true } */

// Módulos
const hello = () => console.log('Welcome to the jungle');

export default hello;

// index.js
import hello from './module.js';
hello(); // 'Welcome to the jungle'