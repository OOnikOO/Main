/*
Домашнее задание №1

Курс:
«Язык сценариев JavaScript и библиотека jQuery»»

Модуль 1
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Задание
Запрашивать данные у пользователя необходимо с помощью
prompt(), а выводить результат с помощью alert().

*/



//==== 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

//let userName = prompt('Введите Ваше имя')
//alert('Привет, '+userName+'!') //---Вариант 1
//alert(`Привет, ${userName}!`) //---Вариант 2

//==== 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

//const thisYear = 2023

//let yearOfBirth = +(prompt('Введите Ваш год рождения.') as string) //---Вариант 1
//alert('Вам ' + (thisYear - yearOfBirth) + ' лет.') //-------------------Вариант 1

//let yearOfBirth = prompt('Введите Ваш год рождения.') as any //---Вариант 2
//alert(`Вам ${(thisYear - yearOfBirth)} лет.`) //------------------Вариант 2

//==== 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

//let side = +(prompt('Введите длину стороны квадрата.') as string)
//alert('Периметр равен ' + side * 4)

//==== 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

//let circleRadius = +(prompt('Введите радиус окружности.') as string)
//alert('Площадь круга равна ' + (circleRadius**2) * 3.14)

//==== 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

//let distance = prompt('Введите расстояние в км между двумя городами.') as any
//let time = prompt('За сколько часов хотите добраться?') as any
//alert(`Чтобы успеть вовремя, Вам необходимо двигаться со скоростью ${distance / time} км/ч.`)

//==== 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

//const rate = 0.92
//let numberOfDollars = +(prompt('Введите количество долларов.') as string)        
//alert(`В евро это будет ${(numberOfDollars * rate).toFixed(2)}.`) //---.toFixed еще не проходили :)

//==== 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

/*
let flash = +(prompt('Укажите объем флешки в Гб.') as string)
const fileSize = 820
alert(`${(flash * 1024 - (flash * 1024) % fileSize) / fileSize} файла(ов) поместится.`)
*/

//==== 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

//let sum = +(prompt('Введите сумму денег в кошельке.') as string)
//let chocolatePrice = +(prompt('Введите цену одной шоколадки.') as string)
//alert(`Вы сможите купить ${((sum - (sum % chocolatePrice)) / chocolatePrice)} шоколадку(ок), а сдача составит ${sum % chocolatePrice}.`)


//==== 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

//let num = +(prompt('Введите трехзначное число.') as string)
//let a = num % 10
//let b = ((num - a) / 10) % 10
//let c = ((((num - a) / 10) - b) / 10) % 10
//alert(`Ваше число задом наперед ${a}${b}${c}.`)

//==== 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.

//Не понятно, как без if сделать :(

//Нужно как-то использовать это... -> ("|| возвращает первое истинное значение")

//let num = +(prompt('Введите целое число.') as string)
//let check = num % 2 == 0
//let even =('Число четное.')
//let odd = ('Число нечетное.')
//let result = even || odd
//alert(result)



// Вариант с if:

//let num = +(prompt('Введите целое число.') as string)
//        if(num % 2 == 0) {
//                alert('Число четное.')
//        } else {
//                alert('Число нечетное.')
//        }



// Вариант с условным («тернарным») оператором:

//let num = +(prompt('Введите целое число.') as string) % 2 == 0 ? alert('Число четное.') : alert('Число нечетное.')

//===================================================================================================
//===================================================================================================



/*
Домашнее задание №2

Курс:
«Язык сценариев JavaScript и библиотека jQuery»»

Модуль 1
ТЕМА: ВВЕДЕНИЕ В JAVASCRIPT

Задание
Вам необходимо самостоятельно решить, для какого задания
какой оператор ветвления лучше использовать: if, switch или
тернарный.
*/

// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).

/*
let userAge = +(prompt('Введите Ваш возраст') as string)
if (userAge > 0 && userAge <12) {
  alert('Ребенок')
} else if (userAge >= 12 && userAge <18) {
  alert('Подросток')
} else if (userAge >= 18 && userAge <60) {
alert ('Взрослый')
} else (userAge >= 60) {
  alert('Пенсионер')
}
*/

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

/*
let num = +(prompt('Введите число от 0 до 9') as string)
switch (num) {
case 0:
  alert(')')
  break
case 1:
  alert('!')
  break
case 2:
  alert('@')
  break
case 3:
  alert('#')
  break
case 4:
  alert('$')
  break
case 5:
  alert('%')
  break
case 6:
  alert('^')
  break
case 7:
  alert('&')
  break
case 8:
  alert('*')
  break
case 9:
  alert('(')
  break
default:
  alert('Читайте внимательнее условие задания!')
}
*/

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

/*
let num = +(prompt('Введите трехзначное число') as string)
let a = num % 10
let b = ((num - a) / 10) % 10
let c = ((((num - a) / 10) - b) /10) % 10
// debugger
if (a == b && a == c) {
  alert('Все цифры одинаковые')
} else if (c == b) {
  alert('Равны первая и вторая цифры')
} else if (a == c) {
  alert('Равны первая и третья цифры')
} else if (b == a) {
  alert('Равны вторая и третья цифры')
} else {
  alert('Все цифры разные')
}
*/

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

/*
let year = +(prompt('Введите любой год') as string)
if ((year % 400 ==0) || (year % 4 == 0) && (year % 100 != 0)) {
alert("Високосный год")
} else {
  alert ("Год не високосный")
}
*/

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

/*
const num = prompt('Введите пятиразрядное число')
if (num[0] == num[4] && num[1] == num[3]) {
  alert ('Палиндромом')
}  else alert (' Не палиндромом')
*/

/* Вариант #1 (Function Declaration)
const num1 = '12345'
const num2 = '12321'

function result (num) {
  if (num[0] == num[4] && num[1] == num[3]) {
    return 'Палиндромом'
  }  else {
    return 'Не палиндромом'
  }
}
console.log (result (num1))
console.log (result (num2))
*/

/* Вариант #2 (Function Expression + Стрелочная функция)
const resultArr = (num) => num[0] == num[4] && num[1] == num[3]?
  'Палиндромом':'Не палиндромом'
console.log (result (num1))
console.log (result (num2))
*/


// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const coefficientEur = 0.917
const coefficientUah = 36.81
const coefficientAzn = 1.7

function convert (quantity, ) {
  switch() {
    case EUR:
      console.log(quantity * coefficientEur)
  }

}

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.



// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.



// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.



// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
//===================================================================================================
//===================================================================================================

/*
1. Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.

let firstStr = 'abc'
let secondStr = 'abcd'
function compareLines (firstStr, secondStr) {

    if (firstStr.length > secondStr.length) {
        return 1
    } else if (firstStr.length < secondStr.length) {
        return -1
    }
    return 0
    
}
console.log(compareLines(firstStr,secondStr))
*/


//Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.


// function randomInt(min: number, max: number) {
  // return Math.floor(Math.random() * (max - min + 1) + min - 0.5)
// }

// let newArr = []
// for (let i = 0; i < 10; i++) {
  // newArr[i] = randomInt(0, 20)
// }

//1. Функция принимает массив и выводит его на экран.
// function showArray(arr: any[]) {
  // console.log(arr)
// }

//2. Функция принимает массив и выводит только четные элементы
// function showEven(arr: any[]) {
  // for (let i = 0; i < arr.length; i++) {
    // if (arr[i] % 2 == 0) {
      // console.log(arr[i])
    // }
  // }
// }

// showArray(newArr)


// Задание 1
// Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

/*
const purchase = [
  {
    name: 'a',
    count: 10,
    purchased: true,
  },
  {
    name: 'b',
    count: 5,
    purchased: false,
  },
  {
    name: 'c',
    count: 3,
    purchased: true,
  },
  {
    name: 'd',
    count: 1,
    purchased: false,
  },
]

const purchasedOl = document.querySelector('.purchase')
const showPurchaseButton = document.querySelector('.showPurchase')
const addPurchaseButton = document.querySelector('.addPurchase')
const setPurchasedButton = document.querySelector('.setPurchased')
*/

// 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

/*
function showPurchase() {
  if (purchasedOl) {
    purchasedOl.innerHTML = ``
  }
  for (let el of purchase) {
    if (!el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} необходимо купить ${el.count} штук</li>`
      }
    }
  }
  for (let el of purchase) {
    if (el.purchased) {
      if (purchasedOl) {
        purchasedOl.innerHTML += `<li>${el.name} куплено ${el.count} штук</li>`
      }
    }
  }
}

showPurchaseButton?.addEventListener('click', showPurchase)

*/

// 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.



/*
addPurchaseButton?.addEventListener('click', addPurchase)

function addPurchase() {
  const name = prompt('Введите назавание покупки') as string
  const count = +(prompt('Введите количество') as string)
  let find = false
  for (let el of purchase) {
    if (el.name == name) {
      find = true
      el.count += count
    }
  }
  if (!find) {
    purchase.push({
      name,
      count,
      purchased: false
    })
  }
  showPurchase()
}
*/

// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

/*
function setPurchased() {
  const name = prompt('Введите назавание покупки') as string
  for (let el of purchase) {
    if (el.name == name) {
      el.purchased = true
    }
  }
  showPurchase()
}

setPurchasedButton?.addEventListener('click', setPurchased)
*/



// Задание 2
// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.

/*
const cheque = [
  {
    name: 'a',
    count: 1,
    price: '1$',
  },
  {
    name: 'b',
    count: 5,
    price: '5$',
  },
  {
    name: 'c',
    count: 10,
    price: '10$',
  },
  {
    name: 'd',
    count: 100,
    price: '100$',
  },
]
*/
// 1. Распечатка чека на экран.

/*
function showCheque(arr: any[]) {
   console.log(arr)
}

showCheque(cheque)
// 2. Подсчет общей суммы покупки.

function getSum(arr:any[]) {
  let sum = 0
  for (let el of arr) {
    sum += el.count*parseFloat(el.price)
  }
  return sum
}
getSum(cheque)
*/

// 3. Получение самой дорогой покупки в чеке.



// 4. Подсчет средней стоимости одного товара в чеке. 