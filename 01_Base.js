// 1 Переменные
// camelCase
//const FirstName = 'Ivan';
//let age = 18;//number
//const isProgrammer = true;// boolean

//const _ = 'private';
//const $ = 'some value';

// const if = 'fgdh' // err
//const withNum5 = '5';
// const 5withNum = 5 // err

// 2 Мутирование
//console.log('Имя человека:' + FirstName + ', а возраст человека:' + age);
//alert('Имя человека:' + FirstName + ', а возраст человека:' + age);

//const LastName = prompt('Введите фамилию');
//alert(FirstName + '' + LastName);

// 3 Операторы
//let currentYear = 2020;
//const birthYear = 2002;

//const age = currentYear + birthYear;

//const a = 10;
//const b = 5;

//let c = 32;
//c = c + a;
//c = c - a;
//c = c * a;
//c = c / a;
//c += a;
//c -= a;
//c *= a;
//c /= a;
//
//console.log(a + b);
//console.log(a - b);
//console.log(a / b);
//console.log(a * b);
//console.log(++currentYear);
//console.log(--currentYear);
//console.log(c);

// 4 Типы даных
//const isProgrammer = true;
//const Firstname = 'Ivan';
//const age = 18;
//let x
//console.log(typeof isProgrammer);
//console.log(typeof Firstname);
//console.log(typeof age);
//console.log(typeof x);
//console.log(null);

// 5 Приотет операторов 
//const fullAge = 18;
//const birthYear = 2002;
//const currentYear = 2020;

// > < >= <=
//const isFullAge = (currentYear - birthYear) >= fullAge // 18 >= 19 => true;
//console.log(isFullAge); 

// 6  Условные операторы
//const courseStatus = 'fail'// ready, fail, pending
//
// if (courseStatus === 'ready') {
//   console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//   console.log('Курс пока находится в процессе разработки')
// } else { 
//   console.log('Курс не получился')
// }

const isReady = true;

//if (isReady) {
//  console.log('Всё готово!')
//}else {
//  console.log('Всё не готово!')
//}

//Тернарное выражение
//isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

//const num1 = 42;// number
//const num2 = '42';// string

//console.log(num1 === num2)

// 7 Булевая логика 

// 8 Функции

// function calculateAge(year) {
// return 2020 - year
// }

// console.log(calculateAge(1993))
// console.log(calculateAge(2001))
// console.log(calculateAge(2002))

// function logInfoAbout(name, year) 
// const age = calculateAge(year);
//
//  if (age > 0) {
//    console.log(' Человек по имени ' + name + ' сейчас имеет возраст ' + age);
//  }else {
//    console.log(' Вообще-то это уже будущие! ')
//  }
//  
//}
//
//logInfoAbout('Ivan', 2002);
//logInfoAbout('Elena', 1995);
//logInfoAbout('Marina', 2022);

// 9 Массивы
//const cars = ['Мазда', 'Марседес', 'Форд'];
//console.log(cars.length);

//const cars = new Array('Мазда', 'Марседес', 'Форд')
//console.log(cars);
//console.log(cars[1]);
//console.log(cars[0]);
//console.log(cars[2]);
//
//cars[0] = 'Porshe';
//cars[cars.length] = 'Mazda';
//console.log(cars);

// 10 Циклы
//const cars = ['Мазда', 'Марседес', 'Форд', 'Porshe'];

//for (let i = 0; i < cars.length; i++) { 
//const car = cars[i];
//console.log(car);
//}

//for (let car of cars) {
//  console.log(car);
//}

// 11 Объекты
const person = {
  FirstName: 'Ivan',
  LastName: 'Krovikov',
  year: 2002,
  languages: ['Ru', 'En', 'De'],
  hasWife: false,
  greet: function() {
    console.log('greet from person');
  }
}

console.log(person.FirstName);
console.log(person['LastName']);
const key = 'year';
console.log(person[key]);
person.hasWife = true;
person.isProgrammer = true;
console.log(person);

person.greet();


