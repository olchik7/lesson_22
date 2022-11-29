"use strict";
console.log('Учим JS');

console.log('JS')
console.log('Учим')

/* Так помилка, потрібно з нового рядка і поставити ;
console.log('Учим')console.log('JS')
*/

/*Також помилка, потрібно закрити лапку)
console.log('Учим);
console.log('JS');
*/

let userEyes = 'green';
console.log(userEyes);

let user;
let userName = 'Вася';
user = userName;
console.log(user);

/* Потрібно перенести в інший рядок, або поставити ";"
let user = 'Вася' let age = 36
*/

// Бажано писати через camelCase, тобто myAge.
let myage = 36;
console.log(myage);

// Не коректно так записувати такі константи 
const BLOCK_SIZE = 14 + 50;
console.log(BLOCK_SIZE);

const BLOCK_HEIGHT = 100;
console.log(BLOCK_HEIGHT);

if (true) {
	var size = 15;
}
console.log(size);

//
let userAge = 36;
let userInfo = 'Фрилансер ${userAge}';

//
let userHeight = 145 / 0;
console.log(userHeight);

//

/*
let userName;
console.log(typeof userName);
*/

let userSize = '45' / '8';
console.log(typeof userSize);

