// Async y await
const coolSong = (iAmABadass) => {
	return new Promise((resolve, reject) => {
		if (iAmABadass === true) {
			return setTimeout(() => resolve('Welcome to the jungle'), 2000);
		}
		return setTimeout(() => reject('All about that bass'), 2000);
	})
};

const coolSongAsync = async (iAmABadass) => {
	const cool = 'The coolest song is...';
	console.log(cool);
	try {
		const song = await coolSong(iAmABadass);
		console.log(song);
	} catch (error) {
		console.log(`Aparently something went wrong: The result is ${error}`);
	}
};

coolSongAsync(true); // The coolest song is... Welcome to the jungle

// Object.entries
const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
};

const entries = Object.entries(data);
console.log(entries);

// [ [ 'name', 'Manuel' ], [ 'age', 24 ], [ 'rocks', true ] ]

// Object.values
const data = {
	name: 'Manuel',
	age: 24,
	rocks: true,
};

const entries = Object.values(data);
console.log(entries);

// [ 'Manuel', 24, true ]

// padStart
const string = 'hunt';
const theWitcher = string.padStart(9, 'wild '); 
// specifies a string of 9 characters

console.log(theWitcher); // 'wild hunt'

// padEnd
const string = 'the wild ';
const theWitcher = string.padEnd(13, 'hunt');

console.log(theWitcher); // 'the wild hunt'

// Si se especifican más o menos caracteres, el string original se mantiene y el segundo se repite hasta completar los caracteres o se corta dependiendo del caso

// Ecmascript 8 también introduce las trailing commas 😃