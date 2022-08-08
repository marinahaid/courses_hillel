'use strict';
// 1) Создать переменные const и let с своим именем. Изменить свое имя на любое другое.
const myName = 'Marina'
let nameChange = 'Marina'
nameChange = 'Vasia'
alert(myName);
alert(nameChange);

// 2) Придумать название для следующих переменных: пользователь, супер пользователь,
// список активных пользователей, активен ли пользователь
let user
let userSuper
let activeUserlist
let isUserActive

// 3) Создать переменные с массивом чисел(любых), объект с произвольными ключами и значениями, 
// строку с типа “Привет мир” где мир это переменная в которой хранится строка мир
let arrayNumbers = [1,2,3,4]
let colorCar = {
    nissan: 'red',
    mercedes: 'green',
    corolla: 'blue'
}

let world = 'мир'
alert('Привет ' + world);

// 4) Написать результат выражений:

 10 < 3 // false

 'hi' != 'hello' // true

 1 == '1' // true

 null == 'null' // false

 null === undefined // false

 1 === 1 && 'hi' // 'hi'

 true && 'I love js' // 'I love js'

 123 && 'hi' || 'hello' // 'hi'

// 0 + ? true : false //  error

 1 + 1 // 2

 '12' + '31' // '1231'

 3 / '3' // 1

 10 * 'hello'; // NaN

// '13'++ //  error

// ++13 // error

// 16) Написать условие которое выведет в консоль приветствие пользователя в зависимости
// от его роли(обычный пользователь, админ, суперадмин, неавторизированный пользователь) тремя способами: switch, ?, if.
//1
let userCommon;
let admin;
let adminSuper ;
let userUnauthorized = true;


if(userCommon) {
    console.log('Привет, пользователь!');
} else if(admin) {
    console.log('Привет, админ!');
}  else if(adminSuper) {
    console.log('Привет, супер админ!');
}  else if(userUnauthorized) {
    console.log('Привет, войди!');
}

//2
const person = 'user';
switch (person) {
  case 'user':
    console.log('Приветы, пользователь!');
    break;
    case 'admin':
      console.log('Приветы, админ!');
      break;
      case 'adminSuper':
        console.log('Приветы, супер админ!');
        break;
        case 'Guest':
          console.log('Приветы, гость!');
          break;
  default:
}

let isUser;
let isAdmin;
let isSuperAdmin;
let isGuest = true;
let isPerson = isUser ? 'Hello, user!' : isAdmin ? 'Hello, admin' : isSuperAdmin ? 'Hello, super admin' :
isGuest ? 'Hello, guest' : 'Who are you?';
console.log( isPerson);


// 17) Написать switch условие определения овощ либо фрукт(подсказка используйте один код для многих названий овощей либо фруктов)

  const food = 'carrot'
  switch (food) {
    case 'apple':
    case 'orange':
    case 'mango':
    case 'kiwi':
      console.log('It\'s fruit');
      break;
    case 'potatoes':
        case 'cabbage':
            case 'carrot':
    default:
      console.log('It\'s vegetables');
  }