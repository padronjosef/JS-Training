// Array.flat
const messedArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]], [4, 5, 6]];
const flatedArray = messedArray.flat();
const flatedArray2 = messedArray.flat(2);
console.log(flatedArray); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ], 4, 5, 6 ]
console.log(flatedArray2); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6 ]

// Flatmap
const messedArray = [1, 2, 3, 4, 5, 6];

const mapFlatArray = messedArray.flatMap((value) => [value * 2, value * 3]);

console.log(mapFlatArray); // [ 2, 3, 4, 6, 6, 9, 8, 12, 10, 15, 12, 18 ]

// trimStart
const hello = '     welcome to the jungle      '

console.log(`${hello} here is the end`);
 //     welcome to the jungle       here is the end
console.log(`${hello.trimStart()} here is the end`);
 // welcome to the jungle       here is the end
console.log(`${hello.trimEnd()} here is the end`);
//      welcome to the jungle here is the end

// Optional catch bind
try {
//  code
} catch {
	// code
} // no es necesario pasar error al catch

// Object.fromEntries
const data = [
	['name', 'Manuel'],
	['age', 24],
	['rocks', true],
];

const object = Object.fromEntries(data);

console.log(object); // { name: 'Manuel', age: 24, rocks: true }

// Symbol description
const symbolDescription = 'My Symbol description';
const mySymbol = Symbol(symbolDescription);
console.log(mySymbol.description); // My symbol description