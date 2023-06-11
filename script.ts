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

        //let flash = +(prompt('Укажите объем флешки в Гб.') as string)
        //const fileSize = 820
        //alert(`${(flash * 1024 - (flash * 1024) % fileSize) / fileSize} файла(ов) поместится.`)


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

        let num = +(prompt('Введите целое число.') as string)
        //let even = ('Число четное.')
        let odd = ('Число нечетное.')
        let evenBoolean = num % 2 == 0
        let oddBoolean = odd
        let result = evenBoolean || oddBoolean
        alert(result)



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


//==== 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
//==== 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
//==== 3. Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
//==== 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
//==== 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
//==== 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
//==== 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
//==== 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
//==== 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
//==== 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.