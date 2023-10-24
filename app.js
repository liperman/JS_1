console.log('Привет, МИР!');
let name = 'ANton'; // Объявление переменной с присвоением значения
name = 'DENIS'; // ПЕРЕПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
console.log(name);
const age = 15; // объявление константы, то есть значения без возможности переприсвоить новое значение
console.log(name + ' ' + age);
let number1 = 2;
let number2 = 50;
sum = number1*number2;
console.log('sum' + ' ' + sum);
sum = number2 / number1;
console.log('sum' + ' ' + sum);
let age_1 = 15;
console.log(age_1);
age_1 += 2;    // прибавить два
console.log(age_1);
age_1 -= 4;    // отнять 4
console.log(age_1);
age_1 *= 2;    // умножить на 2
console.log(age_1);
age_1 /= 2;    // разделить на два
console.log(age_1);
age_1++;    // увеличение на единицу
console.log(age_1);
age_1--;    // уменьшение на единицу
console.log(age_1);
const age_Dima = 15;
console.log(age_Dima > age_1); //сравнение двух переменных, результат true
console.log(age_Dima < age_1); //сравнение двух переменных, результат false
console.log(age_Dima <= age_1); //сравнение двух переменных, результат false
console.log(age_Dima >= age_1); //сравнение двух переменных, результат true
console.log(age_Dima == age_1); //сравнение двух переменных, результат false

let sravnenie = 100 - 10 > 90 - 5; // сначала выполнениы арифметические действия(12 приоритет), а потом логический оператор (10 приоритет)
console.log(sravnenie);

let b;
let c;
let v;
v= 100;
b = c = v;
console.log('b = ' + b + ', ' + 'c = ' + c + ', ' + 'v = ' + v + ', ') // result b = 100, c = 100, v = 100, 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

let number_a = 3;
let number_b = 3.4;
console.log(typeof number_a); // number
console.log(typeof number_b); // number

let string_a = 'Ivan'
console.log(typeof string_a); //string

let s;
console.log(typeof s); //undefined

let g = null;
console.log(typeof g); // object

number_b = 'ttt'; //string
console.log(typeof number_b); //string

let sd = s > g;
console.log(typeof sd); // boolean
console.log(sd);

const projectName = 'Сайт магазина';
const price = 2000;
const author = 'Василий Васильев'
const tamplate = author + ' заказал ' + projectName + ' по цене ' + price;
console.log(tamplate);
const tamplate2 = `${author} заказал ${projectName} по цене ${price} $`; // шаблонное выражение ` обратные кавычки
console.log(tamplate2); 
const tamplate3 = ` Проект
Цена ${price}$`;
console.log(tamplate3)

let number3 = '18';
console.log(number3 + 5);
console.log(Number(number3) + 5); // приведение типа 
console.log(String(9) + 9); // приведение типа 

console.log(Boolean(0)); // false, любое другое true
console.log(Boolean('')); // false, любая не пустая строка true
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false