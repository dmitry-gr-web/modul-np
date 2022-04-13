let obj = {
	flags: [
		{ id: 0, name: '🇷🇺', nameCountry: 'Россия', select: false },
		{ id: 1, name: '🇺🇦', nameCountry: 'Украина', select: false },
		{ id: 2, name: '🇹🇷', nameCountry: 'Турция', select: false },
	],
	currency: [
		{ id: 0, name: '$', select: false },
		{ id: 1, name: '€', select: false },
		{ id: 2, name: '₴', select: false },
		{ id: 3, name: '₽', select: false },
	],
	// { id: 0, name: 'Все', select: true },
};
console.log(Object.entries(obj.flags).find(([key, value]) => value.select));
console.log(obj.flags.filter(x=> x.select === false))
