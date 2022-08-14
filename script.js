"use strict";
// 1) Создать переменные const и let с своим именем. Изменить свое имя на любое другое.
/* const myName = "Marina";
let nameChange = "Marina";
nameChange = "Vasia";
alert(myName);
alert(nameChange);

// 2) Придумать название для следующих переменных: пользователь, супер пользователь,
// список активных пользователей, активен ли пользователь
let user;
let userSuper;
let activeUserlist;
let isUserActive;

// 3) Создать переменные с массивом чисел(любых), объект с произвольными ключами и значениями,
// строку с типа “Привет мир” где мир это переменная в которой хранится строка мир
let arrayNumbers = [1, 2, 3, 4];
let colorCar = {
  nissan: "red",
  mercedes: "green",
  corolla: "blue",
};

let world = "мир";
alert("Привет " + world);

// 4) Написать результат выражений:

10 < 3; // false

"hi" != "hello"; // true

1 == "1"; // true

null == "null"; // false

null === undefined; // false

1 === 1 && "hi"; // 'hi'

true && "I love js"; // 'I love js'

(123 && "hi") || "hello"; // 'hi'

// 0 + ? true : false //  error

1 + 1; // 2

"12" + "31"; // '1231'

3 / "3"; // 1

10 * "hello"; // NaN

// push//  error

// ++13 // error

// 16) Написать условие которое выведет в консоль приветствие пользователя в зависимости
// от его роли(обычный пользователь, админ, суперадмин, неавторизированный пользователь) тремя способами: switch, ?, if.
//1
let userCommon;
let admin;
let adminSuper;
let userUnauthorized = true;

if (userCommon) {
  console.log("Привет, пользователь!");
} else if (admin) {
  console.log("Привет, админ!");
} else if (adminSuper) {
  console.log("Привет, супер админ!");
} else if (userUnauthorized) {
  console.log("Привет, войди!");
}

//2
const person = "user";
switch (person) {
  case "user":
    console.log("Приветы, пользователь!");
    break;
  case "admin":
    console.log("Приветы, админ!");
    break;
  case "adminSuper":
    console.log("Приветы, супер админ!");
    break;
  case "Guest":
    console.log("Приветы, гость!");
    break;
  default:
}

let isUser;
let isAdmin;
let isSuperAdmin;
let isGuest = true;
let isPerson = isUser
  ? "Hello, user!"
  : isAdmin
  ? "Hello, admin"
  : isSuperAdmin
  ? "Hello, super admin"
  : isGuest
  ? "Hello, guest"
  : "Who are you?";
console.log(isPerson);

// 17) Написать switch условие определения овощ либо фрукт(подсказка используйте один код для многих названий овощей либо фруктов)

const food = "carrot";
switch (food) {
  case "apple":
  case "orange":
  case "mango":
  case "kiwi":
    console.log("It's fruit");
    break;
  case "potatoes":
  case "cabbage":
  case "carrot":
  default:
    console.log("It's vegetables");
}  */

//ДОМ. ЗАДАНИЕ 2
// 1. превратить строку "Hello world" в "Hello World!"
// a)
const changeWord = "Hello world!";
alert(changeWord.replace("world", "World"));

//b
const str = "Hello world!";
const words = str.split(" ");
let change = words[1];
change = str[0].toUpperCase() + str.slice(1);
function ucFirst(change) {
  if (!change) return change;
  return change[0].toUpperCase() + change.slice(1);
}

let newWords = ucFirst("world!");
alert("Hello " + newWords);

// c)
let str1 = `Hello world!`;
let newWord = str1.split(" ");
let newWord1 = newWord[1];
let newWordUpper = newWord1.charAt(0).toUpperCase() + newWord1.slice(1);
let result = newWord[0] + " " + newWordUpper;
alert(result);

// d)
let string1 = `Hello world!`;
let newString = string1.split(" ");
let newString1 = newString[1];
newWord1 = "World!";
alert(newString[0] + " " + newWord1);

// 2. написать цикл который будет логировать тип данных каждого символа строки
// (например "a123" - в итоге должна быть строка "string, number, number.
// number"(Внимание именно в таком формате - иными словами в один ряд))

let commonStr = "a123";
let arrChange = commonStr.split(" , ");
let newArr = [];
for (let i = 0; i < commonStr.length; i++) {
  let value = arrChange[i];
  if (i != 0) {
    value = Number(value);
  } else {
    value = String(value);
  }
  newArr.push(typeof value);
}
console.log(newArr);

// 3. написать цикл который будет на каждое число от 13 и до 3 выводить "odd", "even"
// в зависимости четное или нет число в итерируемой переменной
// Каждый цикл написать как через for так и через while.

for (let i = 0; i < 13; i) {
  if (++i % 2 == 0) {
    alert(i + " even");
  } else {
    alert(i + " odd");
  }
}

let numeral = 1;
while (numeral <= 13) {
  if (numeral % 2 === 0) {
    alert(numeral + "even");
  } else {
    alert(numeral + "odd");
  }
  numeral++;
}
